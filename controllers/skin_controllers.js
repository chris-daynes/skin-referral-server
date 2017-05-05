const Skin = require('../models/skin')

module.exports = {

    greeting(req, res, next) {
        res.send({ message: 'Hello from me' })
    },

    create(req, res, next) {
        const skinProps = req.body
        Skin.create(skinProps)
            .then(skin => res.send(skin))
            .catch(next)
    }
}