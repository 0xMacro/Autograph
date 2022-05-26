import React, { useEffect, useState } from "react";

import { Body, Container, Header, Title} from "./components";
import WalletButton from "./components/WalletButton";
import Subscriptions from "./components/Subscriptions";
import { useEthers } from "@usedapp/core";
import { AddressBookFactory__factory, Subscriptions__factory } from "./types";
import { ADDRESS_BOOK_FACTORY_ADDRESSES, SUBSCRIPTIONS_ADDRESSES } from "./constants";
import AddressBookForm from "./components/AddressBookForm";
import AddressBookList from "./components/AddressBookList";
import { Signer } from "ethers";
import 'reactjs-popup/dist/index.css';
// import GET_TRANSFERS from "./graphql/subgraph";

const App = () => {
  const [signer, setSigner] = useState<Signer | null>(null);
  const { account, library, chainId } = useEthers();

  useEffect(() => {
    if (!library) return;
    setSigner(library.getSigner());
  }, [library]);
  // const IAddressBook = AddressBookFactory__factory.connect(ADDRESS_BOOK_FACTORY_ADDRESSES[chainId!]!, library!);
  const ISubscriptions = Subscriptions__factory.connect(SUBSCRIPTIONS_ADDRESSES[chainId!]!, library!);
  const IAddressBookFactory = AddressBookFactory__factory.connect(ADDRESS_BOOK_FACTORY_ADDRESSES[chainId!]!, library!);
  return (
    <Container>
      <Header>
        <Title>✍️ Autograph</Title>
        <WalletButton />
      </Header>
      <Body>
        {account && signer && (
          <>
            <AddressBookForm IAddressBookFactory={IAddressBookFactory} />
            <AddressBookList account={account} IAddressBookFactory={IAddressBookFactory} signer={signer} />
            <Subscriptions ISubscriptions={ISubscriptions}  />
          </>
        )}
      </Body>
    </Container>
  );
}

export default App;
