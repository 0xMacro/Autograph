// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./interfaces/IAddressBookDeployer.sol";
import "./interfaces/IAddressBook.sol";

contract AddressBook is IAddressBook {
    address public immutable override owner;

    constructor() {
        (owner) = IAddressBookDeployer(msg.sender).parameters();
    }
}
