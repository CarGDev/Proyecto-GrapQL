'use strict'
const { MongoClient } = require('mongodb')
const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_NAME
} = process.env

const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
let connection

async function connectDB () {
  if (connection) return connection

  let client
  try {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    connection = client.db(DB_NAME)
  } catch (error) {
    console.error('Cannot connect to DB', mongoUrl, error)
    process.exit(1)
  }

  return connection
}

module.exports = connectDB
