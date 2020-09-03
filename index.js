'use strict'
// graphql,
const { buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const app = express()
const config = require('./config')
const port = config.port.port

// Definiendo el esquema
const schema = buildSchema(`
  type Query {
    hello: String
    saludo: String
  }
`)

// Resolvers
const resolvers = {
  hello: () => {
    return 'Hola Mundo'
  },
  saludo: () => {
    return 'Hola a todos'
  }
}

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening ar http://localhost:${port}/api`)
})
