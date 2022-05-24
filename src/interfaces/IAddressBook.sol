// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.13;

error EntryNotFound();

/// @title An interface for an address book contract
/// @author Vincenzo Ferrara (vinceferro)
interface IAddressBook {
    enum Tipology {
        EOA,
        CONTRACT
    }

    struct Entry {
        string name;
        Tipology tipology;
        address entryAddress;
        string[] labels;
    }

    event EntryAdded(
        address indexed addressBook,
        uint256 indexed index,
        Entry entry
    );

    event EntryUpdated(
        address indexed addressBook,
        uint256 indexed index,
        Entry entry
    );

    event EntryDeleted(
        address indexed addressBook,
        uint256 indexed index,
        Entry entry
    );

    /// @notice Get the entries in the address book
    /// @return entries The entries in the address book
    function getEntries() external view returns (Entry[] memory entries);

    /// @notice Get a single entry
    /// @param index The index of the entry to get
    /// @return entry The entry at the index in the address book
    function getEntry(uint256 index) external view returns (Entry memory entry);

    /// @notice Add an entry to the address book
    /// @param name The name of the entry
    /// @param tipology The tipology of the entry
    /// @param entryAddress The address of the entry
    /// @param labels The labels of the entry
    /// @return entry The entry that was added
    function addEntry(
        string calldata name,
        Tipology tipology,
        address entryAddress,
        string[] calldata labels
    ) external returns (Entry memory);

    /// @notice Add multiple entries to the address book
    /// @param names The names of the entries
    /// @param tipologies The tipologies of the entries
    /// @param entryAddresses The addresses of the entries
    /// @param labels The labels of the entries
    /// @return entries The entries that were added
    function addEntries(
        string[] calldata names,
        Tipology[] calldata tipologies,
        address[] calldata entryAddresses,
        string[][] calldata labels
    ) external returns (Entry[] memory);

    /// @notice Update an entry in the address book
    /// @param index The index of the entry to update
    /// @param name The name of the entry
    /// @param tipology The tipology of the entry
    /// @param entryAddress The address of the entry
    /// @param labels The labels of the entry
    /// @return entry The entry that was updated
    function updateEntry(
        uint256 index,
        string calldata name,
        Tipology tipology,
        address entryAddress,
        string[] calldata labels
    ) external returns (Entry memory);

    /// @notice Delete an entry from the address book
    /// @param index The index of the entry to delete
    /// @return entry The entry that was deleted
    function deleteEntry(uint256 index) external returns (Entry memory);
}
