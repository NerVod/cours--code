console.log("Exécution du code de a.js");

const donneesExportees = require("./b.js");

console.log("Dans a.js :", donneesExportees);

const autreExport = require("./b.js");

console.log("autreExport :", autreExport);
