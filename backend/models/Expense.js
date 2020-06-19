const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String
  },
  users: {
    type: Array,
  },
  payers: {
    type: Array,
    required: true
  },
  value: {
    type: String,
    
  },
  order: {
    type: String,
    
  }
})

module.exports = User = mongoose.model('expense', UserSchema)

