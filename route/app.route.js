module.exports = (app) => {
    const App = require('../controller/app.controller');
    const Users = require('../model/app.model');
    app.post('/create', async (req, res) => {
        try {
            const user = new Users(req.body)
            const savve = await user.save()
            res.send(savve)
        } catch (e) {
            console.log("app", e);
        }
    })
    app.get("get-all", App.findAll)

    app.get("/user/:userId", App.findOne)

    app.put("/user/:userId", App.update)

    app.delete("/user/:userId", App.delete)
}