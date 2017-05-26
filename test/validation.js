const assert = require('assert')
const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')

const Skin = mongoose.model('skin')

describe('Validation of data inputed data', () => {
    it('ensures that the nhi has seven digits', done => {
        const ptProps = {
            nhi: "wer123",
            firstName: 'Bob',
            lastName: 'Harris'
        }
        request(app) 
            .post('/skins')
            .send(ptProps)
            .end(() => {
                Skin.findOne({ firstName: 'Bob'})
                    .then(pt => {
                        console.log()
                        done()
                    })
            })
    } )
})