const app = require("../model/app.model")

exports.findAll = (req, res) => {
    app.find()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                user:
                    err.user || "some occured error"
            })
        })
}

exports.findOne = (req, res) => {
    app.findById(req.params.userId)
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    user: "some id is not found" + req.params.userId
                })
            }
            res.send(data)
        })
        .catch((err) => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    user: "id is not found" + req.params.userId
                })
            }
            return res.status(500).send({
                user: "id is found" + req.params.userId
            })
        })
}

exports.update = (req, res) => {
    app.findByIdAndUpdate(
        req.params.userId,
        {
            username: req.body.username,
            age: req.body.age,
            password: req.body.password
        },
        { new: true }
    )
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    user: "some id is not update" + req.params.userId
                })
            }
            res.send(data)
        })
        .catch((err) => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    user: "id is not updated" + req.params.userId
                })
            }
            return res.status(500).send({
                user: "id is updated" + req.params.userId
            })
        })
}

exports.delete = (req, res) => {
    app.findByIdAndDelete(req.params.userId)
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    user: "some id is not delete" + req.params.userId
                })
            }
            res.send({ user: "User data is deleted successfully" })
        })
        .catch((err) => {
            if (err.kind === "ObjectId" || err.name === "ObjectId") {
                return res.status(404).send({
                    user: "id is not delete" + req.params.userId
                })
            }
            return res.status(500).send({
                user: "id is deleted" + req.params.userId
            })
        })
}