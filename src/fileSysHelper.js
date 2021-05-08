const fs = require("fs");

const { promisify } = require("util");

const writer = promisify(fs.writeFile);
const reader = promisify(fs.readFile);

const writeFile = async (data, fileName) => {
  await writer(`./${fileName}`, data);
};

const readFile = async (filePath) => {
  return reader(filePath);
};

module.exports = {
  readFile,
  writeFile,
};
