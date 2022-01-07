console.log("Exécution du code de a.js");

import * as donneesExportees from "./b.js";

console.log("Dans a.js :", donneesExportees);

import * as autreImport from "./b.js";

console.log("Autre Import dans a.js :", autreImport);
