import { ApolloServer } from "apollo-server"
import { typeDefs } from "./schema.js"
import { Query } from "./resolvers/Query.js"
import { Category } from "./resolvers/Category.js"
import { Product } from "./resolvers/Products.js"
import { db } from "./db.js"
import { Review } from "./resolvers/Review.js"
import { Mutation } from "./resolvers/Mutation.js"
const resolvers = {
  Query,
  Mutation,
  Category,
  Product,
  Review,
}

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
  context: {
    db,
  },
})

server.listen().then(({ url }) => console.log(`server is ready at ${url}`))
