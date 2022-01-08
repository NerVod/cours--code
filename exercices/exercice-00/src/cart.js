// à exporter...
/**
 *CLass contructor to handle the customer's cart
 *
 * @class CartManager
 */
class CartManager {
  constructor() {
    this.cart = [];
  }

  /**
   *create a new cart
   *
   * @return {array}
   * @memberof CartManager
   */
  getCart() {
    return this.cart;
  }

  /**
   *function that push new item in cart array
   *
   * @param {object} item
   * @return {object}
   * @memberof CartManager
   */
  addItem(item) {
    for (let i = 0; i < this.cart.length; i++) {
      if (item === this.cart[i].item) {
        this.cart[i].quantity++;
        return this;
      }
    }
    this.cart.push({
      quantity: 1,
      item: item,
    });
    return this;
  }

  /**
   *function that removes items in the cart's array
   *
   * @param {*} item
   * @return {*}
   * @memberof CartManager
   */
  removeItem(item) {
    for (let i = 0; i < this.cart.length; i++) {
      this.cart.quantity = this.cart.quantity || 0;
      if (item === this.cart[i].item) {
        this.cart[i].quantity--;
        if (this.cart[i].quantity < 1) {
          this.cart.splice(i, 1);
        }
      }
    }
    return this;
  }
}

export { CartManager };
