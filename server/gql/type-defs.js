const { gql } = require("apollo-server");

module.exports = gql`
  type Transaction {
    _id: ID
    name: String
    description: String
    createdAt: String
    updatedAt: String
    category: Category
  }

  type Category {
    _id: ID
    name: String
    description: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    transactions: [Transaction]!
    categories: [Category]!
  }
`;
