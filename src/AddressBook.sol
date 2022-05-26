// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./interfaces/IAddressBookDeployer.sol";
import "./interfaces/IAddressBook.sol";
import "./utils/StrictOwnable.sol";

/// @title Address Book contract to manage a list of addresses
/// @author Vincenzo Ferrara (vinceferro)
contract AddressBook is IAddressBook, StrictOwnable {
    Entry[] public entries;

    constructor() {
        (owner) = IAddressBookDeployer(msg.sender).parameters();
    }

    /// @inheritdoc IAddressBook
    function getEntries() external view override returns (Entry[] memory) {
        return entries;
    }

    /// @inheritdoc IAddressBook
    function getEntry(uint256 index)
        external
        view
        override
        returns (Entry memory)
    {
        return entries[index];
    }

    /// @inheritdoc IAddressBook
    function addEntry(
        string calldata name,
        Tipology tipology,
        address entryAddress,
        string[] calldata labels
    ) external override onlyOwner returns (Entry memory) {
        return _addEntry(name, tipology, entryAddress, labels);
    }

    /// @inheritdoc IAddressBook
    function addEntries(
        string[] calldata names,
        Tipology[] calldata tipologies,
        address[] calldata entryAddresses,
        string[][] calldata labels
    ) external override onlyOwner returns (Entry[] memory newEntries) {
        newEntries = new Entry[](names.length);
        for (uint256 i = 0; i < names.length; i++) {
            newEntries[i] = _addEntry(
                names[i],
                tipologies[i],
                entryAddresses[i],
                labels[i]
            );
        }
    }

    function _addEntry(
        string memory name,
        Tipology tipology,
        address entryAddress,
        string[] memory labels
    ) internal returns (Entry memory entry) {
        entry.name = name;
        entry.tipology = tipology;
        entry.entryAddress = entryAddress;
        entry.labels = labels;
        entries.push(entry);

        emit EntryAdded(address(this), entries.length - 1, entry);
    }

    /// @inheritdoc IAddressBook
    function updateEntry(
        uint256 index,
        string calldata name,
        Tipology tipology,
        address entryAddress,
        string[] calldata labels
    ) external override onlyOwner returns (Entry memory) {
        if (index >= entries.length) {
            revert EntryNotFound();
        }
        return _updateEntry(index, name, tipology, entryAddress, labels);
    }

    function _updateEntry(
        uint256 index,
        string memory name,
        Tipology tipology,
        address entryAddress,
        string[] memory labels
    ) internal returns (Entry memory) {
        Entry storage entry = entries[index];
        entry.name = name;
        entry.tipology = tipology;
        entry.entryAddress = entryAddress;
        entry.labels = labels;

        emit EntryUpdated(address(this), index, entry);
        return entry;
    }

    /// @inheritdoc IAddressBook
    function deleteEntry(uint256 index)
        external
        override
        onlyOwner
        returns (Entry memory)
    {
        if (index >= entries.length) {
            revert EntryNotFound();
        }
        return _deleteEntry(index);
    }

    function _deleteEntry(uint256 index) internal returns (Entry memory entry) {
        entry = entries[index];
        uint256 lastIndex = entries.length - 1;
        if (index != lastIndex) {
            entries[index] = entries[lastIndex];
        }
        entries.pop();

        emit EntryDeleted(address(this), index, entry);
    }
}
