import React from "react";

import { Body, Container, Header} from "./components";
import WalletButton from "./components/WalletButton";
import Subscriptions from "./components/Subscriptions";
import logo from "./ethereumLogo.png";
import { useEthers } from "@usedapp/core";
import { AddressBookFactory__factory, Subscriptions__factory } from "./types";
import { ADDRESS_BOOK_FACTORY_ADDRESSES, SUBSCRIPTIONS_ADDRESSES } from "./constants";
import AddressBookForm from "./components/AddressBookForm";
import AddressBookList from "./components/AddressBookList";
// import GET_TRANSFERS from "./graphql/subgraph";

const App = () => {
  const { library, chainId } = useEthers();
  // const IAddressBook = AddressBookFactory__factory.connect(ADDRESS_BOOK_FACTORY_ADDRESSES[chainId!]!, library!);
  const ISubscriptions = Subscriptions__factory.connect(SUBSCRIPTIONS_ADDRESSES[chainId!]!, library!);
  const IAddressBookFactory = AddressBookFactory__factory.connect(ADDRESS_BOOK_FACTORY_ADDRESSES[chainId!]!, library!);
  return (
    <Container>
      <Header>
        <WalletButton />
      </Header>
      <Body>
        <AddressBookForm IAddressBookFactory={IAddressBookFactory} />
        <AddressBookList IAddressBookFactory={IAddressBookFactory} library={library} chainId={chainId}/>
        <Subscriptions ISubscriptions={ISubscriptions}  />
      </Body>
    </Container>
  );
}

export default App;
