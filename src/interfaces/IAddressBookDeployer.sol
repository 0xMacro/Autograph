// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.13;

/// @title An interface for a contract that is capable of deploying Address Books
/// @notice A contract that constructs an address book must implement this to pass arguments to the address book
/// Heavily inspired by IUniswapV3PoolDeployer.sol
/// @dev This is used to avoid having constructor arguments in the address book contract, which results in the init code hash
/// of the address book being constant allowing the CREATE2 address of the address book to be cheaply computed on-chain
/// @author Vincenzo Ferrara (vinceferro)
interface IAddressBookDeployer {
    /// @notice Get the parameters to be used in constructing the address book, set transiently during creation.
    /// @dev Called by the address book constructor to fetch the parameters of the address book
    /// @return owner The owner of the address book
    function parameters() external view returns (address owner);
}
