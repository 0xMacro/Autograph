deploy-all: loadenv deploy-address-book deploy-subscriptions

deploy-address-book: loadenv
	forge create src/AddressBookFactory.sol:AddressBookFactory --keystore $ETH_KEYSTORE --rpc-url $ETH_RPC_URL --etherscan-api-key $ETHERSCAN_API_KEY

deploy-subscriptions: loadenv
	forge create src/Subscriptions.sol:Subscriptions --keystore $ETH_KEYSTORE --rpc-url $ETH_RPC_URL --etherscan-api-key $ETHERSCAN_API_KEY

loadenv:
	source .env