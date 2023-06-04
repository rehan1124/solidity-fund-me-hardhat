# solidity-fund-me-hardhat

### Solidity-Hardhat project

- `cd` to the repo after cloning it

- Run `npm install` to have setup and packages

- Run `npx hardhat clean` to clean-up the artifacts and cache folder

- After cleanup, run `npx hardhat deploy` to compile and deploy solidity contract present in contracts folder

```
Output:

Compiled 1 Solidity file successfully
deploying "FundMeV2" (tx: 0xdc5fb01a7fa0c3a01cbb395df97cf88262189cd485a1ef28a1a61ffa6370d488)...: deployed at 0x5FbDB2315678afecb367f032d93F642f64180aa3 with 521067 gas
---Deployment completed ---
```

- After compile process completes, run `npx hardhat run .\scripts\deploy.js` to deploy the contract into local Hardhat network. You would also see address at which contract is deployed on console screen.

We will be using hardhat-deploy package for deployment.

- Deployment on testnets such as Sepolia would be different. Run below command and observe the output.

```
Command:
npx hardhat run .\scripts\deploy.js --network sepolia

Output:
--- Starting deployment ---
Deployed contract address:  0xE94F3cCE3ABb7ED5f954e6fb87fdFfc304D66c5B
--- Deployment done ---
```
