export const Product = {
  category: (parent, args, context) => {
    const categoryId = parent.categoryId
    const { categories } = context

    return categories.find((category) => category.id === categoryId)
  },
  reviews: (parent, args, context) => {
    const { id } = parent
    const { reviews } = context
    const filterReviews = reviews.filter((review) => {
      return review.productId === id
    })

    return filterReviews
  },
}
