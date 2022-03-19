export const Query = {
  products: (parent, args, context) => {
    const { products, reviews } = context
    const { filter = null } = args
    let filteredProducts = products
    if (filter) {
      const { onSale, avgRating } = filter
      if (onSale) {
        filteredProducts = filteredProducts.filter((product) => product.onSale)
      }
      // only show the product which has avg Rating (sumOfRating / numOfReview) above input of avgRating
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          const filteredReviews = reviews.filter(
            (review) => review.productId === product.id
          )

          const sumOfRating = filteredReviews.reduce((accu, item) => {
            return accu + item.rating
          }, 0)

          const numOfReview = filteredReviews.length

          const filteredAvgRating = Math.round(sumOfRating / numOfReview)
          if (filteredAvgRating >= avgRating) {
            return product
          }
        })
      }
    }
    return filteredProducts
  },
  product: (parent, args, context) => {
    const productID = args.id
    const { products } = context
    return products.find((product) => product.id === productID)
  },

  categories: (parent, args, context) => {
    const { categories } = context
    return categories
  },

  category: (parent, args, context) => {
    const categoryID = args.id
    const { categories } = context
    return categories.find((category) => category.id === categoryID)
  },
  reviews: (parent, args, context) => {
    const { reviews } = context
    return reviews
  },
  review: (parent, args, context) => {
    const reviewId = args.id
    const { reviews } = context
    return reviews.find((review) => review.id === reviewId)
  },
}
