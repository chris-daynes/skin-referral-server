const Skin = require('../models/skin')

module.exports = {

    greeting(req, res, next) {
        res.send({ message: 'Hello from me' })
    },

    get(req, res, next) {
        const nhi = req.params.nhi
        Skin.findOne({ nhi: nhi})
            .then(pt => res.send(pt))
            .catch(next)
    },

    create(req, res, next) {
        const skinProps = req.body
        Skin.create(skinProps)
            .then(pt => res.send(pt))
            .catch(next)
    }
}