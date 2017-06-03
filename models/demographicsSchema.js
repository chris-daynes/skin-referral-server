
//creating a demographics schema

const LesionSchema = require('./lesionSchema')

 module.exports = {
    // nhi: {
    //     type: String,
    //     validate: {
    //         //the validator here needs to be a regex or something more precise
    //         validator: (nhi) => nhi.length === 7,
    //         message: "The NHI does not have seven digits"
    //     },
    //     required: [ true, 'NHI is required.']
    // },
    
    nhi: String,
    firstName: String,
    lastName: String,
    dob: String,
    age: Number,
    address_street: String,
    address_suburb: String,
    address_city: String,
    lesions: [LesionSchema]
}

