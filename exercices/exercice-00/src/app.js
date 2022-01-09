// Les constructeurs devront être importés.
const builder = new GuiBuilder(new CartManager(), new ProductsRepository());
// Initialisation de l'interface graphique.
builder.initialize();

import { GuiBuilder } from "./gui.js";
console.log(GuiBuilder)
import  { CartManager }  from "./cart.js";
console.log(CartManager)
import { ProductsRepository }  from "./products.js";
console.log(ProductsRepository)