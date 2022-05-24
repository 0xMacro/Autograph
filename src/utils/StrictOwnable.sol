// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

error OnlyOwnerAccess();

/// @title An abstract contract for ownable contracts with an immutable owner
/// @author Vincenzo Ferrara (vinceferro)
abstract contract StrictOwnable {
    /// @notice owner of the specific address book
    address public owner;

    /// @notice modifiers that allow access only to the owner
    modifier onlyOwner() {
        if (msg.sender != owner) {
            revert OnlyOwnerAccess();
        }
        _;
    }
}
