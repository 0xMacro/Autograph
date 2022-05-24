// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.13;

/// @title An interface for an address book contract
interface IAddressBook {
    /// @notice Get the owner of the address book
    /// @return owner The address of the owner of the address book
    function owner() external view returns (address owner);
}
