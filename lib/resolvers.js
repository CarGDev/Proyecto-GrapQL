'use strict'

// const connectDb = require('./db')

const query = require('./query')
const mutation = require('./mutation')

module.exports = {
  Query: query,
  Mutation: mutation
}
