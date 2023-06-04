const { network } = require("hardhat");

const deployFunc = async (hre, deploymentNetwork) => {
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
module.exports.tags = ["all", "fund-me"];
