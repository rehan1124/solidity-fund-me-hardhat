const { network } = require("hardhat");

const deployFunc = async (hre, network) => {
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("FundMeV2", {
    from: deployer,
    args: [],
    log: true,
  });
  log("---Deployment completed ---");
};

module.exports = deployFunc;
