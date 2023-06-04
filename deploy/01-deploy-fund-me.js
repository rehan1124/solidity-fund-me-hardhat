const { network } = require("hardhat");

const deployFunc = async (hre, deploymentNetwork) => {
  console.log("--- Starting deployment process ---");
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("FundMeV2", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  log("---Deployment completed ---");
};

module.exports = deployFunc;
