"use sttrict";

const initiateConversion = require("./pdfHelper");

(async () => {
  const fileName = process.env.npm_config_fileName;
  console.log("fileName", fileName);
  if (!fileName.includes(".pdf")) {
    console.log("invalid file name. Please provide a pdf file");
    return;
  }
  console.log("Starting the converison process");
  try {
    await initiateConversion(fileName);
  } catch (ex) {
    console.log("An error occured ", ex);
  }
})();
