const assert = require('assert')
const request = require('supertest')
const Skin = require('../models/skin')
const app = require('../app')

describe('The skin controllers', () => {
    it('hello world test', (done) => {
        done()
    })

    it('successfully posts a new pt to the db', done => {
        const ptProps = {
            nhi: "wer1234",
            firstName: 'Bob',
            lastName: 'Harris'
        }
        request(app)
            .post('/skins')
            .send(ptProps)
            .end(() => {
                Skin.findOne({ nhi: "wer1234" })
                    .then(pt => {
                        assert(pt.firstName === 'Bob')
                        done()
                    })
            })
    })
})
