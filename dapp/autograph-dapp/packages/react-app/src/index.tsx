import "./index.css";

import { DAppProvider, Goerli } from "@usedapp/core";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Change this to your own Infura project id: https://infura.io/register
const INFURA_PROJECT_ID = "3791bcbebe5e477b8d05794bc4f86530";
const config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://goerli.infura.io/v3/" + INFURA_PROJECT_ID,
  },
}

// You should replace this url with your own and put it into a .env file
// See all subgraphs: https://thegraph.com/explorer/
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: "https://api.thegraph.com/subgraphs/name/paulrberg/create-eth-app",
// });

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      {/* <ApolloProvider client={client}> */}
        <App />
      {/* </ApolloProvider> */}
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
