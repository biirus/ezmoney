const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    createdAt: String,
    category: { type: mongoose.Schema.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
