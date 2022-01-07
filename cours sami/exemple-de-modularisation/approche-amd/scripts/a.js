console.log("Exécution du code de a.js");

console.log("Exécution du code de b.js");
requirejs(["b"], function (donneesRetournées) {
  console.log("Dans a.js :", donneesRetournées);
  // d'autres instructions basées sur les données retournées
  // ...
  // ...
});

console.log("Fin exécution du code de a.js");
