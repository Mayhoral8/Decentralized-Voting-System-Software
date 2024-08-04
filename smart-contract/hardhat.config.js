require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.2",
  networks: {
    sepolia: {
      url:API_URL,
      accounts:[`0x${PRIVATE_KEY}`],
    }
  },
  etherscan: ETHERSCAN_API_KEY
};
