var TotoroToken = artifacts.require("./TotoroToken.sol");

module.exports = function(deployer) {
  deployer.deploy(TotoroToken);
};
