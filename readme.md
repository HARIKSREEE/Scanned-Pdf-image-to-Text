This is a simple scanned pdf image to text conversion tool.

We need to create three folders named as below in the same direcory of package.json

processedText,
processedImages,
fileSource

run the below command

 **npm  --fileName="name of the pdf file in fileSource folder" run-script extract**

 if we omit the --fileName argument, the default name it will look is **test.pdf**

We need to add the pdf file to be processed in the **fileSource folder**.

