// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

/// @title The interface for the Address Book Factory
/// @notice The Address Book Factory facilitates creation of Address Books
/// Heavily inspired by IUniswapV3Factory.sol
/// @author Vincenzo Ferrara (vinceferro)
interface IAddressBookFactory {
    /// @notice Emitted when an address book is created
    /// @param owner The owner of the address book
    /// @param index The index of the address book
    /// @param book The address of the address book
    event AddressBookCreated(
        address indexed owner,
        uint256 indexed index,
        address book
    );

    /// @notice Creates a new Address Book owned by the message sender
    /// @return book The address of the newly created address book
    function createAddressBook() external returns (address book);

    /// @notice Returns all address books by owner
    /// @param owner The address of the owner of the address book
    /// @return books The array of address books owned by the owner
    function getAddressBooksByOwner(address owner)
        external
        view
        returns (address[] memory books);

    /// @notice Returns the address book address for a given owner and an index, 0 if it is out of bound
    /// @param owner The address of the owner of the address book
    /// @param index The index of the address book
    /// @return book The address of the address book at the index
    function getAddressBook(address owner, uint256 index)
        external
        view
        returns (address book);
}
