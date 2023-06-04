// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

error FundMeV2__NotOwner();

/**
 * @title A contract for crowd-funding
 * @author Syed Rehan
 * @notice This contract is to demo sample crowd-funding
 */
contract FundMeV2 {
    // --- State variables ---
    uint256 public constant MIN_VALUE = 1000 wei;

    address[] public funders;
    mapping(address => uint256) public addressToMoneyFunded;

    address public immutable owner;

    // --- Modifiers ---

    modifier managerOnly() {
        // require(msg.sender == owner, "Only manager can withdraw funds.");
        if (msg.sender != owner) {
            revert FundMeV2__NotOwner();
        }
        _;
    }

    // --- Constructor ---

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {
        fund();
    }

    fallback() external payable {
        fund();
    }

    // --- Functions ---

    /**
     * @notice Function is used to add funds. Minimum value to be funded is 1000 wei.
     */
    function fund() public payable {
        require(msg.value >= MIN_VALUE, "Minimum 1000 wei is required.");
        funders.push(msg.sender);
        addressToMoneyFunded[msg.sender] += msg.value;
    }

    /**
     * @notice Only manager can withdraw funds
     */
    function withdraw() public managerOnly {
        for (
            uint256 funderIndex = 0;
            funderIndex < funders.length;
            funderIndex += 1
        ) {
            address funder = funders[funderIndex];
            addressToMoneyFunded[funder] = 0;
        }

        funders = new address[](0);

        // Using transfer()
        // payable(msg.sender).transfer(address(this).balance);

        // Using send()
        // bool sendStatus = payable(msg.sender).send(address(this).balance);
        // require(sendStatus, "Withdrawal failed.");

        // Using call()
        (bool isWithdrawalSuccess, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(isWithdrawalSuccess, "Withdrawal failed.");
    }
}
