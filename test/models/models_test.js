const assert = require('assert')
const request = require('supertest')
const mongoose = require('mongoose')

const app = require('../../app')

const Skin = mongoose.model('skin')


describe('the model schema', () => {
    it('POST to /skins adds a lesion to the db', done => {
        const ptProps = {
            nhi: "wer1236",
            firstName: 'Bob',
            lastName: 'Harris',
            lesions: [{clinicalDiagnosis: 'Melanoma'}]
        }
        
        request(app)
            .post('/skins')
            .send(ptProps)
            .end(() => {
                Skin.findOne({nhi: 'wer1236'})
                    .then(pt => {
                        assert(pt.lesions[0].clinicalDiagnosis === 'Melanoma')
                        done()
                    })
            })
    })
})

