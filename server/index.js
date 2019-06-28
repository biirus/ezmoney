require("./config/env");

const { ApolloServer } = require("apollo-server");
const { connectDB } = require("./mongo/connection");
const typeDefs = require("./gql/type-defs");
const resolvers = require("./gql/resolvers");

const Category = require("./mongo/models/Category");

async function bootstrap () {
  const dbConnection = await connectDB();

  // const category = new Category({
  //   name: "first category",
  //   description: "some description",
  // });

  // category.save();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.listen(process.env.SERVER_PORT, () => {
    console.log(`🚀   server is listening at ${process.env.SERVER_PORT} port`);
  });
}

bootstrap();
