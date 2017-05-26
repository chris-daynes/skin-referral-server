
const skinControllers = require('../controllers/skin_controllers')


module.exports = (app) => {

    app.get('/', skinControllers.greeting)

    app.get('/skins/:nhi', skinControllers.get)

    app.post('/skins', skinControllers.create)
}