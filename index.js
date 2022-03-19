import { ApolloServer } from "apollo-server"
import { typeDefs } from "./schema.js"
import { Query } from "./resolvers/Query.js"
import { Category } from "./resolvers/Category.js"
import { Product } from "./resolvers/Products.js"
import { categories, products, reviews } from "./db.js"
import { Review } from "./resolvers/Review.js"
const resolvers = {
  Query,
  Category,
  Product,
  Review,
}

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
  context: {
    categories,
    products,
    reviews,
  },
})

server.listen().then(({ url }) => console.log(`server is ready at ${url}`))
