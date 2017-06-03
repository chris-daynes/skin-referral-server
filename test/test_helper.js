const mongoose = require('mongoose')

before(done => {
    mongoose.connect('mongodb://localhost/skinreferral_test')
    mongoose.connection
        .once('open', () => done())
        .on('error', error => {
            console.warn('Warning', error);
        });
}) 

beforeEach(done => {
    const { skins } = mongoose.connection.collections
    skins.drop()
        .then(() => done())
        .catch(() => done())
})