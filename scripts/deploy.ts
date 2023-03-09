import { ethers, run, network } from "hardhat";

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  const SimpleStorage = await SimpleStorageFactory.deploy();
  await SimpleStorage.deployed();
  console.log(`Contract deploed to + ${SimpleStorage.address}`);

  if (network.name !== "hardhat" && process.env.ETHERSCAN_API_KEY) {
    await SimpleStorage.deployTransaction.wait(6);
    verify(SimpleStorage.address, []);
  }
}

async function verify(contractAddress: string, args: any[]) {
  console.log("verifying");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constuctorArguments: args,
    });
  } catch (e: any) {
    console.log(e);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
