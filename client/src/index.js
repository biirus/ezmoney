import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

console.warn("Wait for react-apollo@3.0. Now you are using beta version.");

const client = new ApolloClient({ uri: "http://localhost:5000/graphql" });

const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

const CREATE_CATEGORY = gql`
  mutation CreateCategory($name: String!, $description: String) {
    createCategory(name: $name, description: $description) {
      _id
      name
      description
    }
  }
`;

const App = ({ data }) => {
  const { loading, error } = data;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  console.log(loading, error, data);

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugit autem
      maxime quibusdam quam ducimus recusandae corporis voluptatum aperiam nulla
      vitae aut perferendis atque numquam nemo obcaecati, necessitatibus magnam?
      Voluptas.
    </div>
  );
};

const Enhanced = graphql(GET_CATEGORIES)(App);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Enhanced />
  </ApolloProvider>,
  document.getElementById("root")
);
