const pdfJs = require("pdfjs-dist/es5/build/pdf.js");

//const { readFile } = require("./fileSysHelper");

const fs = require("fs");

const canvasHelper = require("./canvasHelper");

const callTesseract = require("./tesseractHelper");

const CMAP_URL = "../node_modules/pdfjs-dist/cmaps/";
const CMAP_PACKED = true;
let fileNamePrefix = "";

const PdfHelper = {
  getPdfObjectAndProcess: async (filePath) => {
    // const docData = fs.readFileSync(`./fileSource/${filePath}`);
    const data = new Uint8Array(fs.readFileSync(`./fileSource/${filePath}`));
    pdfJs
      .getDocument({
        data,
        cMapUrl: CMAP_URL,
        cMapPacked: CMAP_PACKED,
      })
      .promise.then(async (pdfObject) => {
        console.log("conversion started");
        fileNamePrefix = filePath;
        await PdfHelper.processPages(pdfObject);
      });
  },

  processPages: async (pdfDocProxy) => {
    const pageNos = pdfDocProxy.numPages;

    for (var j = 1; j < pageNos; j++) {
      const pageData = await pdfDocProxy.getPage(j);
      console.log("processing page:", j);
      const ops = await pageData.getOperatorList();
      await PdfHelper.processSinglePage(ops, pageData, j);
    }
  },

  processSinglePage: async (ops, pageData, pageNo) => {
    for (var i = 0; i < ops.fnArray.length; i++) {
      if (
        ops.fnArray[i] == pdfJs.OPS.paintJpegXObject ||
        ops.fnArray[i] == pdfJs.OPS.paintImageXObject
      ) {
        const data = pageData.objs.get(ops.argsArray[i][0]);

        if (data.data.buffer) {
          var scale = data.width / pageData._pageInfo.view[2];
          var viewport = pageData.getViewport({
            scale: scale,
            rotation: 0,
            dontFlip: false,
            offsetX: 0,
            offsetY: 0,
          });
          const { context, dataCanvas } = canvasHelper(data.width, data.height);

          await pageData.render({
            canvasContext: context,
            viewport: viewport,
          }).promise;
          var imageData = dataCanvas.toBuffer();
          await callTesseract(
            imageData,
            `processedText/${fileNamePrefix}_page${pageNo}`
          );
        }
      }
    }
  },

  initiateConversion: async (fileName) => {
    const pdfObject = await PdfHelper.getPdfObjectAndProcess(fileName);
    // console.log("pdfObject", pdfObject);
    //await PdfHelper.processPages(pdfObject);
    return true;
  },
};

module.exports = PdfHelper.initiateConversion;
