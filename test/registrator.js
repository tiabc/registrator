contract('Registrator', function(accounts) {
  var zeroAddress = '0x0000000000000000000000000000000000000000';

  var ownerAccount = accounts[0];
  it("should successfully register a user", function() {
    var reg = Registrator.deployed();

    return reg.GetRecord.call(0x123456, {from: ownerAccount}).then(function(res) {
      var sender = res[0];
      var time   = res[1];
      assert.equal(sender, zeroAddress, "sender must be initially empty");
      assert.equal(time.toNumber(), 0, "no record must be initially stored");
    }).then(function() {
      reg.register(0x123456, {from: ownerAccount});
      return reg.GetRecord.call(0x123456, {from: ownerAccount});
    }).then(function(res) {
      var sender = res[0];
      var time   = res[1];
      assert.equal(sender, ownerAccount);
      assert.notEqual(time.toNumber(), 0, "time mustn't be 0 for a registered record");
    });
  });

  var sideAccount  = accounts[1];
  it("should be unable to register a user", function() {
    var reg = Registrator.deployed();

    return reg.register(0x654321, {from: sideAccount}).then(function() {
      return reg.GetRecord.call(0x654321, {from: sideAccount});
    }).then(function(res) {
      var sender = res[0];
      var time   = res[1];
      assert.equal(sender, zeroAddress);
      assert.equal(time.toNumber(), 0, "time must be 0 for an unregistered record");
    });
  });
});
