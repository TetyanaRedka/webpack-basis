const path = require("path");

const paths = {
  ENTRY_POINT: path.resolve(__dirname, "../../src", "index.js"),
  BUILD_DIR: path.resolve(__dirname, "../../build"),
  PUBLIC_POINT: path.resolve(__dirname, "../../public", "index.html"),
};

module.exports = paths;
