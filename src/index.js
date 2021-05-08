"use sttrict";

const initiateConversion = require("./pdfHelper");

(async () => {
  const fileName = process.env.npm_config_fileName ? process.env.npm_config_fileName : process.argv[2];
  console.log("fileName", fileName);
  if (!fileName.includes(".pdf")) {
    console.log("invalid file name. Please provide a pdf file");
    return;
  }
  console.log("Starting the converison process");
  try {
   await initiateConversion(fileName);
    console.log("Conversion completed");
  } catch (ex) {
    debugger;
    console.log("An error occured ", ex);
  }
})();
