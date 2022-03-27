export const Category = {
  products: (parent, args, context) => {
    const categoryId = parent.id
    const { db } = context
    const { filter = null } = args
    let filteredProducts = db.products.filter(
      (product) => product.categoryId === categoryId
    )
    if (filter) {
      if (filter.onSale) {
        filteredProducts = filteredProducts.filter((product) => product.onSale)
      }
    }
    return filteredProducts
  },
}
