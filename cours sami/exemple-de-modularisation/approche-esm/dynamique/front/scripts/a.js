console.log("Exécution du code de a.js");

import("./b.js")
  .then(function (donneesExportees) {
    console.log("Dans a.js", donneesExportees);
    // instructions qui utilisent les données Exportées
    // ...
    // ...
  })
  .catch(function () {
    console.log("Erreur lors de l'import dynamique du module b.js");
  });
