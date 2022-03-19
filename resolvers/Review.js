export const Review = {
  product: (parent, args, context) => {
    const { products } = context
    const { productId } = parent

    return products.find((product) => product.id === productId)
  },
}
