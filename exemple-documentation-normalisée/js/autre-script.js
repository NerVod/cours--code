/**
 * Cette fonction effectue la somme de 2 valeurs passées en paramètres
 * et retourne le résultat
 *
 * @param {Number} a Le premier nombre à additionner
 * @param {Number} b Le second nombre à additionner
 * @return {Number} Le résultat de la somme de a et b
 *
 */
const somme = function (a, b) {
  /** @type {Number} */
  const resultat = a + b;

  return resultat;
};

/**
 * Cet "classe" permet d'instancier un objet qui effectue des calculs
 *
 * @class Calculateur
 */
class Calculateur {
  /**
   * @memberof Calculateur
   */
  constructor() {}

  /**
   * Effectue la multiplication de 2 nombre passés en paramètres
   *
   * @param {Number} a Premier nombre
   * @param {Number} b Second nombre
   * @return {Number} Retourne le résultat de la multiplication de a et b
   * @memberof Calculateur
   */
  multiplication(a, b) {
    const resultat = a * b;

    return resultat;
  }

  /**
   * Effectue la soustraction de 2 nombre passés en paramètres
   *
   * @param {Number} a Premier nombre
   * @param {Number} b Second nombre
   * @return {Number} Retourne le résultat de la soustraction de a et b
   * @memberof Calculateur
   */
  soustraction(a, b) {
    /** @type {*} */
    const resultat = a - b;
    return resultat;
  }
}
