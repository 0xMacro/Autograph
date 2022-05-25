// import { useQuery } from "@apollo/client";
import { Contract } from "@ethersproject/contracts";
import { shortenAddress, useCall, useEthers, useLookupAddress } from "@usedapp/core";
import React, { useEffect, useState } from "react";

import { Body, Button, Container, Header, Image, Link, Subscription, Flex, SubscriptionContainer, ListContainer, ListItem, Label, ListHeader} from "./components";
import logo from "./ethereumLogo.png";

import { addresses, abis } from "@my-app/contracts";
// import GET_TRANSFERS from "./graphql/subgraph";

function WalletButton() {
  const [rendered, setRendered] = useState("");

  const ens = useLookupAddress();
  const { account, activateBrowserWallet, deactivate, error } = useEthers();

  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered("");
    }
  }, [account, ens, setRendered]);

  useEffect(() => {
    if (error) {
      console.error("Error while connecting wallet:", error.message);
    }
  }, [error]);

  return (
    <Button
      onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
    >
      {rendered === "" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </Button>
  );
}

function Subscriptions() {
  const exampleSubsciptions = ['0xdeadbeef']
  const exampleList = [
    {
      name: 'test contract',
      tipology: 1, //contract
      entryAddress: '0x123abc',
      labels: ['test', 'goerli', 'dank']
    },
  ]

  const [expand, setExpand] = useState(true)

  return (
    exampleSubsciptions.map((subscription, i) => (
      <SubscriptionContainer key={subscription}>
        <Subscription onClick={() => setExpand(!expand)}>{subscription}</Subscription>
        {expand && exampleList.length > 0 ? 
          <>
          {/* <ListHeader>
            <div>contract name:</div>
            <div>type:</div>
            <div>address:</div>
            <div>labels:</div>
          </ListHeader> */}
          <ListContainer>
            {exampleList.map((list) => (
              <ListItem key={subscription + list}>
                <div>{list.name}</div>
                {/* <div>{list.tipology == 0 ? 'EOA' : 'Contract'}</div> */}
                <Link href={`https://goerli.etherscan.io/address/${list.entryAddress}`}>{list.entryAddress.slice(0,5) + '...' + list.entryAddress.slice(-3)}</Link>
                <Flex>{list.labels.map((label, i) => (  
                  <Label key={subscription + list + label}>{label}</Label>
                  ))}</Flex>
              </ListItem>
            ))}
          </ListContainer>
          </>
          :
          <></>
        }
      </SubscriptionContainer>
    ))
  )
}

function App() {
  const { account } = useEthers();

  // Read more about useDapp on https://usedapp.io/
    // const { error: contractCallError, value: subscriptions } =
    // useCall({
    //   contract: new Contract(addresses.Subscriptions, abis.Subscriptions),
    //   method: "subscriptions",
    //   args: [account, 0],
    // }) ?? {}


  //   console.log(contractCallError, tokenBalance)

  // const { loading, error: subgraphQueryError, data } = useQuery(GET_TRANSFERS);

  // useEffect(() => {
  //   if (subgraphQueryError) {
  //     console.error("Error while querying subgraph:", subgraphQueryError.message);
  //     return;
  //   }
  //   if (!loading && data && data.transfers) {
  //     console.log({ transfers: data.transfers });
  //   }
  // }, [loading, subgraphQueryError, data]);

  const exampleList = [
    {
      name: 'test contract',
      tipology: 1, //contract
      entryAddress: '0x123abc',
      labels: ['test', 'goerli', 'dank']
    },
  ]


  return (
    <Container>
      <Header>
        <WalletButton />
      </Header>
      <Body>
        <Subscriptions />

        {/* <Image src={logo} alt="ethereum-logo" />
        <p>
          Edit <code>packages/react-app/src/App.js</code> and save to reload.
        </p>
        <Link href="https://reactjs.org">
          Learn React
        </Link>
        <Link href="https://usedapp.io/">Learn useDapp</Link>
        <Link href="https://thegraph.com/docs/quick-start">Learn The Graph</Link> */}
      </Body>
    </Container>
  );
}

export default App;
