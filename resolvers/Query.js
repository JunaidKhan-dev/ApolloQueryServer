export const Query = {
  products: (parent, args, context) => {
    const { db } = context
    const { filter = null } = args
    let filteredProducts = db.products
    if (filter) {
      const { onSale, avgRating } = filter
      if (onSale) {
        filteredProducts = filteredProducts.filter((product) => product.onSale)
      }
      // only show the product which has avg Rating (sumOfRating / numOfReview) above input of avgRating
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          const filteredReviews = db.reviews.filter(
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
    const { db } = context
    return db.products.find((product) => product.id === productID)
  },

  categories: (parent, args, context) => {
    const { db } = context
    return db.categories
  },

  category: (parent, args, context) => {
    const categoryID = args.id
    const { db } = context
    return db.categories.find((category) => category.id === categoryID)
  },
  reviews: (parent, args, context) => {
    const { db } = context
    return db.reviews
  },
  review: (parent, args, context) => {
    const reviewId = args.id
    const { db } = context
    return db.reviews.find((review) => review.id === reviewId)
  },
}
