const assert = require('assert')
const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../../app')

const Skin = mongoose.model('skin')

describe('The skin controllers', () => {
    it('hello world test', (done) => {
        done()
    })

    it('POST to /skins successfully adds a new pt referral', done => {
        
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

    it('obtain a pt by a GET request to skin/:nhi',  done => {
        const pt = new Skin({
            nhi: 'ABC1234',
            firstName: 'Chris',
            lastName: 'Christopherson'
        })
        pt.save().then(() => {
            request(app)
                .get('skins/' + pt.nhi)
                .end((err, res) => {
                    console.log('!!!', res)
                    done()
                })
        })
    })
})
