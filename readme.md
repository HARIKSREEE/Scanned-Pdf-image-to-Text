# Tesseract PDF Image Text Extractor

This is a simple tool to extract text from scanned pdf images using tesseract OCR as the OCR engine.

As of now I am providing the document for running this tool in Windows platforms.

Main dependencies of this project are given below:

1. canvas - [Visit GitHub of canvas](https://github.com/Automattic/node-canvas)

    canvas npm package has some compatibility issues with windows x86 based windows platform

2. node-tesseract-ocr - [Visit GitHub of node-tesseract-ocr](https://github.com/zapolnoch/node-tesseract-ocr)

3. tesseract ocr engine - [Visit GitHub of tesseract ocr engine](https://github.com/tesseract-ocr/tesseract)

## Tesseract at UB Mannheim

The above university providing ready to install binaries for Windows platforms (both x86 and x64).

The details are available here at [their GitHub wiki](https://github.com/UB-Mannheim/tesseract/wiki).


### Steps to run the project

Install all of the node dependencies by running
>npm install

Also you need to install the tesseract [binaries from here](https://github.com/UB-Mannheim/tesseract/wiki).


Create the below folders in the same directory.

>processedText,
>processedImages,
>fileSource

run the below command

>npm run-script extract

The above command will look for a file named **test.pdf** and start extracting.

 >npm  --fileName="_FILENAME_" run-script extract

 We can also specify a filename of our wish. We need to replace the _FILENAME_ with our filename.

Happy extraction...!

