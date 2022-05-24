// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./interfaces/IAddressBookDeployer.sol";

import "./AddressBook.sol";

contract AddressBookDeployer is IAddressBookDeployer {
    struct Parameters {
        address owner;
    }

    /// @inheritdoc IAddressBookDeployer
    Parameters public override parameters;

    /// @dev Deploys an address book with the given parameters by transiently setting the parameters storage slot and then
    /// clearing it after deploying the address book.
    /// @param owner The owner of the address book
    /// @param index The index of the address book
    function deploy(address owner, uint256 index)
        internal
        returns (address book)
    {
        parameters = Parameters({owner: owner});
        book = address(
            new AddressBook{salt: keccak256(abi.encode(owner, index))}()
        );
        delete parameters;
    }
}
