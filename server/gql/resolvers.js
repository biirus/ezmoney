const Category = require("../mongo/models/Category");

const dummyTransaction = {
  _id: "123",
  name: "dummy string",
  description: "dummy string",
  createdAt: "dummy string",
  category: {},
};

module.exports = {
  Query: {
    transactions: () => {
      return [dummyTransaction];
    },
    categories: async () => {
      return await Category.find();
    },
  },

  Mutation: {
    createCategory: async (root, args, ctx) => {
      const newCategory = await new Category({ ...args.input }).save();
      return newCategory;
    },
  },
};
