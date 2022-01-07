define(function () {
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

  return {
    premiereValeur: toto,
    secondeValeur: titi,
    troisiemeValeur: tata,
  };
});
