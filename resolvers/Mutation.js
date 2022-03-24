import { v4 as uuid } from "uuid"

export const Mutation = {
  addCategory: (parent, args, context) => {
    const { categories } = context
    const { input } = args
    const { name } = input
    const newCategory = {
      id: uuid(),
      name: name,
    }
    categories.push(newCategory)

    return newCategory
  },
  addProduct: (parent, args, context) => {
    const { products } = context
    const { input } = args
    const { name, description, image, quantity, price, onSale, categoryId } =
      input
    const newProduct = {
      id: uuid(),
      name,
      description,
      image,
      quantity,
      price,
      onSale,
      categoryId,
    }
    products.push(newProduct)

    return newProduct
  },

  addReview: (parent, args, context) => {
    const { reviews } = context
    const { input } = args
    const { date, title, comment, rating, productId } = input
    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    }
    reviews.push(newReview)

    return newReview
  },
}
