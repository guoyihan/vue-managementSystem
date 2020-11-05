const mongoose = require('mongoose')

const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    pass: {
        type: String,
        require: true 
    }

  }, {collection: 'user', versionKey: false})
  module.exports = mongoose.model('user',UserSchema)