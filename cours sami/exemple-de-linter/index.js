let texte = 'Bonjour'

// const autreTexte = 'Salut les gens';

const maFonction = function () {
  while (texte === 'bonjour') {
    console.log('Cette fonction risque de faire une boucle infinie')
    texte = 'bonjour'
  }
}

maFonction()
