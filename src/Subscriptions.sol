// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./interfaces/IAddressBookFactory.sol";
import "./AddressBookDeployer.sol";

error SubscriptionNotFound();
error OutOfBounds();

/// @title Subscriptions
/// @dev TBD if to keep it this way or to use address book entries to store subscriptions
/// @author Vincenzo Ferrara (vinceferro)
contract Subscriptions {
    constructor() {}

    mapping(address => address[]) public subscriptions;

    event Subscribed(address indexed subscriber, address indexed book);
    event Unsubscribed(address indexed subscriber, address indexed book);

    /// @notice Subscribes a subscriber to an address book
    /// @dev reverts if the subscription to the address book already exists
    /// @param book The address of the address book to subscribe to
    function subscribe(address book) external {
        (, bool found) = _indexOf(book);
        if (found) {
            revert SubscriptionNotFound();
        }
        subscriptions[msg.sender].push(book);

        emit Subscribed(msg.sender, book);
    }

    /// @notice Unsubscribes a subscriber from an address book
    /// @dev reverts if the subscription to the address book does not exist
    /// @param book The address of the address book to unsubscribe from
    function unsubscribe(address book) external {
        (uint256 index, bool found) = _indexOf(book);
        if (!found) {
            revert SubscriptionNotFound();
        }
        _deleteEntry(index);

        emit Unsubscribed(msg.sender, book);
    }

    function getSubscriptions(address owner)
        public
        view
        returns (address[] memory)
    {
        return subscriptions[owner];
    }

    /// @notice Returns the index of the given address book in the subscriptions array
    /// @param book The address of the address book to search for
    /// @return index The index of the address book in the subscriptions array
    /// @return found Whether the address book was found
    function _indexOf(address book) public view returns (uint256, bool) {
        for (uint256 i = 0; i < subscriptions[msg.sender].length; i++) {
            if (subscriptions[msg.sender][i] == book) {
                return (i, true);
            }
        }
        return (0, false);
    }

    /// @notice Deletes the entry at the given index in the subscriptions array
    /// @dev reverts if the index is invalid
    /// @param index The index of the entry to delete
    function _deleteEntry(uint256 index) internal {
        if (index >= subscriptions[msg.sender].length) {
            revert OutOfBounds();
        }
        uint256 lastIndex = subscriptions[msg.sender].length - 1;
        if (index != lastIndex) {
            subscriptions[msg.sender][index] = subscriptions[msg.sender][
                lastIndex
            ];
        }
        delete subscriptions[msg.sender][lastIndex];
    }
}
