require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
require("./tasks/tasks");

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;
const REPORT_GAS = process.env.REPORT_GAS;
const CURRENCY = process.env.CURRENCY;
const COIN_MARKET_KEY = process.env.COIN_MARKET_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.16",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
  gasReporter: {
    enabled: REPORT_GAS ? true : false,
    outputFile: "gas-report.txt",
    noColors: true,
    showTimeSpent: true,
    currency: CURRENCY,
    coinmarketcap: COIN_MARKET_KEY,
  },
};
