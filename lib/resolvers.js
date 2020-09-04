'use strict'

// const connectDb = require('./db')

const query = require('./query')
const mutation = require('./mutation')
const types = require('./types')

module.exports = {
  Query: query,
  Mutation: mutation,
  ...types
}
