import { ethers } from "hardhat";
import { expect, assert } from "chai";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";

describe("SImpleStorage", () => {
  let simpleStorage: SimpleStorage;
  let simpleStorageFactory: SimpleStorage__factory;

  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should start wiht a favorite number of 0", async () => {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = 0;

    // assert.equal(currentValue, expectedValue);
    expect(currentValue).to.equal(expectedValue);
  });

  it("should update when we call store", async () => {
    const expectedValue = 13;
    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);
    const currentValue = await simpleStorage.retrieve();

    // assert.equal(currentValue, expectedValue);
    expect(currentValue).to.equal(expectedValue);
  });
});
