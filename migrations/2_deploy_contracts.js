module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.deploy(Registrator);
  deployer.autolink();
};
