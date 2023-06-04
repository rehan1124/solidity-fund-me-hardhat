# solidity-fund-me-hardhat

### Solidity-Hardhat project

We will be using hardhat-deploy package for deployment.

- `cd` to the repo after cloning it

- Run `npm install` to have setup and packages

- Run `npx hardhat clean` to clean-up the artifacts and cache folder

- After cleanup, run `npx hardhat deploy` to compile and deploy solidity contract into local Hardhat network

```
Output:

Compiled 1 Solidity file successfully
deploying "FundMeV2" (tx: 0xdc5fb01a7fa0c3a01cbb395df97cf88262189cd485a1ef28a1a61ffa6370d488)...: deployed at 0x5FbDB2315678afecb367f032d93F642f64180aa3 with 521067 gas
---Deployment completed ---
```

- Deployment on testnets such as Sepolia would be different. Run below command and observe the output. Make sure you delete cache, artifacts and deployments folder then run the command. Otherwise previous file will be used for generation and new contract may not be deployed.

```
Command:
npx hardhat deploy --network sepolia

Output:
Compiled 1 Solidity file successfully
--- Starting deployment process ---
deploying "FundMeV2" (tx: 0xd5f2eee16e43821b2d63e5331fd25e87dfb72fe02c430ee8c30bcf4387d43007)...: deployed at 0xe0Cb0A9186db12d2aF81cF03Bec583948d532A5F with 521067 gas
---Deployment completed ---
```

- Verifying the deployed contract (Sepolia)

```
Command:
npx hardhat verify 0xe0Cb0A9186db12d2aF81cF03Bec583948d532A5F --network sepolia

Output:
Nothing to compile
Successfully submitted source code for contract
contracts/FundMeV2.sol:FundMeV2 at 0xe0Cb0A9186db12d2aF81cF03Bec583948d532A5F
for verification on the block explorer. Waiting for verification result...

Successfully verified contract FundMeV2 on Etherscan.
https://sepolia.etherscan.io/address/0xe0Cb0A9186db12d2aF81cF03Bec583948d532A5F#code
```
