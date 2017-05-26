const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SkinSchema = new Schema({
    nhi: {
        type: String,
        validate: {
            //the validator here needs to be a regex or something more precise
            validator: (nhi) => nhi.length === 7,
            message: "The NHI does not have seven digits"
        },
        required: [ true, 'NHI is required.']
    },
    firstName: String,
    lastName: String
})

const Skin = mongoose.model('skin', SkinSchema)

module.exports = Skin

function checkFormat(nhi) {

}