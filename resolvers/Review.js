export const Review = {
  product: (parent, args, context) => {
    const { db } = context
    const { productId } = parent

    return db.products.find((product) => product.id === productId)
  },
}
