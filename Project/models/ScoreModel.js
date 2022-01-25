const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scoreSchema = new Schema({
  name: String,
  score: Number

}, { timestamps: true })

const Score = mongoose.model('Score', scoreSchema)

module.exports = Score
