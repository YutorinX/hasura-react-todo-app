import * as React from "react";

import Header from "./Header";
import TodoPrivateWrapper from "./Todo/TodoPrivateWrapper";
import TodoPublicWrapper from "./Todo/TodoPublicWrapper";
import OnlineUsersWrapper from "./OnlineUsers/OnlineUsersWrapper";

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = (authToken?: string) =>
  new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:8080/v1/graphql",
      // * Auth0やAWS Cognitoなどを入れている場合は、ここでトークンを受け取る //
      // headers: {
      //   Authorization: `Bearer ${authToken}`,
      // },
    }),
    cache: new InMemoryCache(),
  });

const App = () => {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <div>
        <Header logoutHandler={() => null} />
        <div className="container-fluid p-left-right-0">
          <div className="col-xs-12 col-md-9 p-left-right-0">
            <div className="col-xs-12 col-md-6 sliderMenu p-30">
              <TodoPrivateWrapper />
            </div>
            <div className="col-xs-12 col-md-6 sliderMenu p-30 bg-gray border-right">
              <TodoPublicWrapper />
            </div>
          </div>
          <div className="col-xs-12 col-md-3 p-left-right-0">
            <div className="col-xs-12 col-md-12 sliderMenu p-30 bg-gray">
              <OnlineUsersWrapper />
            </div>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
