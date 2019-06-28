import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const client = new ApolloClient({ uri: "http://localhost:5000/graphql" });

const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

const App = () => (
  <Query query={GET_CATEGORIES}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return (
        <div>
          <h1>{data.categories[0].name}</h1>
        </div>
      );
    }}
  </Query>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
