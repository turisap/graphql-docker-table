import React from "react";
import { ApolloProvider } from "@apollo/client";

import { Page } from "@components/Page";
import { AppInfoProvider } from "@providers";
import { client } from "@utils";

import "normalize.css";
import "antd/dist/antd.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <AppInfoProvider>
        <Page />
      </AppInfoProvider>
    </ApolloProvider>
  );
}

export default App;
