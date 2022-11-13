const csvToJson = require("convert-csv-to-json");

const fileInputName = "src/constants/books100.csv";
const fileOutputName = "myOutputFile.json";

csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
console.log(csvToJson.parseSubArray("'", ",").getJsonFromCsv(fileInputName));
