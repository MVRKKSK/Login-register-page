const express = require("express");
const app = express();
const cors = require("cors")
const User = require("./model/user.model")

const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/login-register-page")

app.use(cors())
app.use(express.json());
app.post("/api/register", async (req, res) => {
    console.log(req.body); await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    try {

        res.send("hello world")
    } catch (error) {
        console.log(error)
    }
})
app.post("/api/login", async (req, res) => {
    console.log(req.body);
    try {
        const user = await User.findone({
            name: req.body.name,
            email: req.body.email,
        })
    } catch (error) {
        console.log(error)
    }
    if (user) {
        console.log(req.body);
    }
    else (
        console.log("there is no user")
    )
})

app.listen(2500, () => {
    console.log("server is listening on port 2500");
})