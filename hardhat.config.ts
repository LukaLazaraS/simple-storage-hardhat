import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL!;
const PRIVATE_KEY = process.env.PRIVATE_KEY!;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
  },
  solidity: "0.8.18",
};

export default config;
