contract('Registrator', function(accounts) {
  it("should register a user and return his record", function() {
    var reg = Registrator.deployed();

    return reg.GetRecord.call(0x123456).then(function(res) {
      var sender = res[0];
      var time = res[1];
      assert.equal(sender, '0x0000000000000000000000000000000000000000', "sender must be initially empty");
      assert.equal(time.toNumber(), 0, "no record must be initially stored");
    }).then(function() {
      reg.register(0x123456);
      return reg.GetRecord.call(0x123456);
    }).then(function(res) {
      var sender = res[0];
      var time = res[1];
      assert.notEqual(time.toNumber(), 0, "time mustn't be 0 for a registered record");
    });
  });
});
