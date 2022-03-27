import { v4 as uuid } from "uuid"

export const Mutation = {
  addCategory: (parent, args, context) => {
    const { db } = context
    const { input } = args
    const { name } = input
    const newCategory = {
      id: uuid(),
      name: name,
    }
    db.categories.push(newCategory)

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
    const { db } = context
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
    db.reviews.push(newReview)

    return newReview
  },

  deleteCategory: (parent, args, context) => {
    let { db } = context
    const { id } = args

    db.products = db.products.map((product) => {
      if (product.categoryId === id)
        return {
          ...product,
          categoryId: null,
        }
      return product
    })
    db.categories = db.categories.filter((category) => category.id !== id)
    return true
  },
  deleteProduct: (parent, args, context) => {
    let { db } = context
    const { id } = args

    db.products = db.products.filter((product) => product.id !== id)
    db.reviews = db.reviews.filter((category) => category.productId !== id)
    return true
  },

  deleteReview: (parent, args, context) => {
    let { db } = context
    const { id } = args
    db.reviews = db.reviews.filter((product) => product.id !== id)
    return true
  },
  updateCategory: (parent, args, context) => {
    let { db } = context
    const { id, input } = args
    const index = db.categories.findIndex((category) => category.id === id)
    db.categories[index] = {
      ...db.categories[index],
      name: input.name,
    }
    return db.categories[index]
  },

  updateProduct: (parent, args, context) => {
    let { db } = context
    const { id, input } = args
    const index = db.products.findIndex((category) => category.id === id)
    console.log({ index })
    db.products[index] = {
      ...db.products[index],
      ...input,
    }
    return db.products[index]
  },
}
