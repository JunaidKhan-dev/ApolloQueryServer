export const Category = {
  products: (parent, args, context) => {
    const categoryId = parent.id
    const { products } = context
    const { filter = null } = args
    let filteredProducts = products.filter(
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
