const { deployments, ethers, getNamedAccounts } = require("hardhat");
const { assert, expect } = require("chai");

describe("Fund-me", async function () {
  let fundMe;
  let deployer;

  beforeEach(async function () {
    deployer = (await getNamedAccounts()).deployer;
    console.log(deployer);
    await deployments.fixture(["all", "fund-me"]);
    fundMe = await ethers.getContract("FundMeV2", deployer);
  });

  describe("When contract is created", async function () {
    it("Contract owner is set", async function () {
      const contractOwner = await fundMe.owner();
      assert.equal(contractOwner, deployer);
    });
  });

  describe("When user tries to send funds", async function () {
    it("Transaction should be reverted if minimum amount criteria is not met", async function () {
      await expect(fundMe.fund()).to.be.revertedWith(
        "Minimum 1000 wei is required."
      );
    });

    it("Should update sender's amount funded balance if minimum value or more is sent", async function () {
      await fundMe.fund({ value: ethers.utils.parseUnits("1000", "wei") });
      const response = await fundMe.addressToMoneyFunded(deployer);
      assert.equal(response.toString(), ethers.utils.parseUnits("1000", "wei"));
    });
  });
});
