const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const expand = require("dotenv-expand");

const { NODE_ENV } = process.env;

const files = [
  `.env.${NODE_ENV}.local`,
  `.env.${NODE_ENV}`,
  ".env.local",
  ".env",
];

files.forEach(expandConfig);

function expandConfig (file) {
  if (fs.existsSync(path.join(__dirname, "../", file))) {
    expand(
      dotenv.config({
        path: file,
      })
    );
  }
}
