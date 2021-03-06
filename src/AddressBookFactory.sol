// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./interfaces/IAddressBookFactory.sol";
import "./AddressBookDeployer.sol";

/// @title Address Book Factory
/// @author Vincenzo Ferrara (vinceferro)
contract AddressBookFactory is IAddressBookFactory, AddressBookDeployer {
    constructor() {}

    /// @inheritdoc IAddressBookFactory
    mapping(address => address[]) public override getAddressBook;

    function getAddressBooksByOwner(address owner)
        public
        view
        returns (address[] memory)
    {
        return getAddressBook[owner];
    }

    /// @inheritdoc IAddressBookFactory
    function createAddressBook() external returns (address book) {
        address owner = msg.sender;
        uint256 index = getAddressBook[msg.sender].length;
        book = deploy(owner, index);
        getAddressBook[owner].push(book);
        emit AddressBookCreated(owner, index, book);
    }
}
