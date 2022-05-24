import erc20Abi from "./abis/erc20.json";
import ownableAbi from "./abis/ownable.json";
import AddressBookAbi from "./abis/AddressBook.json";
import AddressBookDepolyerAbi from "./abis/AddressBookDeployer.json";
import AddressBookFactoryAbi from "./abis/AddressBookFactory.json";
import SubscriptionsAbi from "./abis/Subscriptions.json";

const abis = {
  erc20: erc20Abi,
  ownable: ownableAbi,
  AddressBook: AddressBookAbi.abi,
  AddressBookDepolyer: AddressBookDepolyerAbi.abi,
  AddressBookFactory: AddressBookFactoryAbi.abi,
  Subscriptions: SubscriptionsAbi.abi,
};

export default abis;


/*

const abis = {
};

export default abis;
*/
