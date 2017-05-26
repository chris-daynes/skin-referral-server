const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DemographicsSchema = require('./demographicsSchema')

const SkinSchema = new Schema(
    DemographicsSchema
)

const Skin = mongoose.model('skin', SkinSchema)

module.exports = Skin

function checkFormat(nhi) {

}