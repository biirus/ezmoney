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
      return [];
    },
    categories: async () => {
      const cats = await Category.find();

      return cats;
    },
  },
};
