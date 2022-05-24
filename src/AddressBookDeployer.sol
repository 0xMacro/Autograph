// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./interfaces/IAddressBookDeployer.sol";

import "./AddressBook.sol";

contract AddressBookDeployer is IAddressBookDeployer {
    struct Parameters {
        address factory;
        address owner;
    }

    /// @inheritdoc IAddressBookDeployer
    Parameters public override parameters;

    /// @dev Deploys an address book with the given parameters by transiently setting the parameters storage slot and then
    /// clearing it after deploying the address book.
    /// @param factory The contract address of the Address Book factory
    /// @param owner The owner of the address book
    function deploy(
        address factory,
        address owner,
        uint256 index
    ) internal returns (address book) {
        parameters = Parameters({factory: factory, owner: owner});
        book = address(
            new AddressBook{salt: keccak256(abi.encode(owner, index))}()
        );
        delete parameters;
    }
}
