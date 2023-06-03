# solidity-fund-me-hardhat

### Solidity-Hardhat project

- `cd` to the repo after cloning it

- Run `npm install` to have setup and packages

- Run `npx hardhat clean` to clean-up the artifacts and cache folder

- After cleanup, run `npx hardhat compile` to compile solidity contract present in contracts folder

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

- Post deployment, to verify smart-contract on Etherscan, run below command. You will see a success/confirmation message or if contract has been verified already, a different message will be displayed.

```
npx hardhat verify --network sepolia 0xb1b64Df23d5BD50E3bF2d3b5D83c1b67E6010C6A

npx hardhat verify --network sepolia <Smart-contract address>

If contract is verifed already, then this will be the message:
The contract 0xb1b64Df23d5BD50E3bF2d3b5D83c1b67E6010C6A has already been verified
```

- When running deploy.js file on Hardhat or Sepolia network, since we have added a basic test, the output will be as below:

```
>>> npx hardhat run scripts/deploy.js
--- Starting deployment ---
Deployed contract address:  0x5FbDB2315678afecb367f032d93F642f64180aa3
--- Deployment done ---
--- Basic test ---
Current favorite number: 0
Updated favorite number to: 13 true
--- Testing completed ---
```

- Added custom tasks

```
>>> npx hardhat accounts
Lists all the accounts available with Hardhat

>>> npx hardhat block-number
Current block number on Hardhat will be displayed

>>> npx hardhat block-number --network sepolia
Current block number on Sepolia Testnet will be displayed
```

- Smart-contract tests are added under `test` folder. To run them execute below command and observe the output:

```
>>> npx hardhat test

 When SimpleStorage contract is deployed
Deployed contract at address:  0x5FbDB2315678afecb367f032d93F642f64180aa3
    ✔ Should start with favorite number of 0
Deployed contract at address:  0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
Waiting for transaction confirmation with atleast 1 block added...
    ✔ Should update on calling store() function

  2 passing (2s)
```

To run tests with a specific keyword:

```
>>> npx hardhat test --grep store

When SimpleStorage contract is deployed
Deployed contract at address:  0x5FbDB2315678afecb367f032d93F642f64180aa3
Waiting for transaction confirmation with atleast 1 block added...
    ✔ Should update on calling store() function (43ms)

  1 passing (2s)
```

- When running tests through hardhat, a gas-report will be generated too. Refer `gas-report.txt`. To turn-off gas reporting, in .env file, set `REPORT_GAS` as `false`.
