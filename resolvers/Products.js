export const Product = {
  category: (parent, args, context) => {
    const categoryId = parent.categoryId
    const { db } = context

    return db.categories.find((category) => category.id === categoryId)
  },
  reviews: (parent, args, context) => {
    const { id } = parent
    const { db } = context
    const filterReviews = db.reviews.filter((review) => {
      return review.productId === id
    })

    return filterReviews
  },
}
