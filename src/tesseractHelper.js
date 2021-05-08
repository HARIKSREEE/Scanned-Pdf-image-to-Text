"use strict";

const { writeFile } = require("./fileSysHelper");

const tesseract = require("node-tesseract-ocr");

const config = {
  lang: "eng",
  oem: 2,
  psm: 3,
};

const callTesseract = async (buffer, fileNamePrefix) => {
  const text = await tesseract.recognize(buffer, config);
  console.log("Writing file:", fileNamePrefix);
  await writeFile(text, fileNamePrefix);
  console.log("Writing file completed:", fileNamePrefix);
};

module.exports = callTesseract;
