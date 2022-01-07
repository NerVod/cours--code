// à exporter...

/**
 *constructor for the products repository
 *
 * @class ProductsRepository
 */
class ProductsRepository {
  /**
   * Creates an instance of ProductsRepository.
   * insert an array of objects with products in repository
   * @memberof ProductsRepository
   */
  constructor() {
    this.products = [
      {
        id: 1,
        name: "Product 1",
        price: 100,
      },
      {
        id: 22,
        name: "Product 2",
        price: 140,
      },
      {
        id: 3,
        name: "Product 3",
        price: 125,
      },
    ];
  }

  /**
   *function that retuns an object the selected product
   *
   * @param {Number} id
   * @return {Object} 
   * @memberof ProductsRepository
   */
  getProduct(id) {
    for (const product of this.products) {
      if (id === product.id) {
        return product;
      }
    }
    return;
  }

  /**
   *
   *
   * @return {*} 
   * @memberof ProductsRepository
   */
  getProducts() {
    return this.products;
  }
}

export { ProductsRepository }
