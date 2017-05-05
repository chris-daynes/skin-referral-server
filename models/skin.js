const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SkinSchema = new Schema({
    nhi: String,
    firstName: String,
    lastName: String
})

const Skin = mongoose.model('skin', SkinSchema)

module.exports = Skin

