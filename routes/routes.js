
const skinControllers = require('../controllers/skin_controllers')



//forming our core CRUD routes used in the app.js file
module.exports = (app) => {

    app.get('/', skinControllers.greeting)

    app.get('/skins/:nhi', skinControllers.get)

    app.post('/skins', skinControllers.create)
}