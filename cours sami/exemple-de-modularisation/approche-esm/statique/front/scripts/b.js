console.log("Exécution du code de b.js");
const toto = "Bonjour";
const titi = function () {
  //instructions
};
const tata = {
  x: true,
  y: Math.random(),
  z: "Oups !",
};

export { toto as premiereValeur };
export { titi as secondeValeur };
export { tata as troisiemeValeur };
