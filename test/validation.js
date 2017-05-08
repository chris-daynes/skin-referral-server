const assert = require('assert')
const Skin = require('../models/skin')
const request = require('supertest')
const app = require('../app')

describe('Validation of inputed data', () => {
    it('ensures that an NHI is provided', (done) => {
        const ptProps = { 
            nhi: undefined,
            firstName: 'Bob',
            lastName: 'Smith'
        }
        request(app)
            .post('/skins')
            .send(ptProps)
            .end((err, pt) => {
                if(err) {
                    console.log(err)
                    done()
                }else {
                    Skin.findOne({firstName: 'bob'})
                        .then(pt => console.log(pt))
                        done()
                }
            })
    })

    xit('ensures that the NHI is 7 charcters long', done => {
        const skin = new Skin({ nhi: 'ABC123'})

        const validationResult = skin.validateSync()
        const { message } = validationResult.errors.nhi
        assert(message === 'The NHI is not a valid format')
        done()
    })
xit('disallows invalid records from being saved', done => {
        const skin = {
            nhi: 'ABC1234', 
            firstName: 'Bill',
            lastName: 'Smith'
        }
        request(app)
            .post('/skins')
            .send(skin)
            .end(() => done())
        
    })
})
