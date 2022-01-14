const express = require("express");
const app = express();
const cors = require("cors")
const User = require("./model/user.model")
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/login-register-page")

app.use(cors())
app.use(express.json());
app.post("/api/register", async (req, res) => {
    console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: "ok", user: true })
    } catch (err) {
        res.json({status: "error" , error:"duplicate email"})
    }
})
app.post("/api/login", async (req, res) => {
    console.log(req.body);
    const user = await User.findOne({
        email: req.body.email,
    })
    if (user) {
        const token = jwt.sign({
            name:user.name,
            email:user.email,
        },"secret123")
        return res.json({ status: "200", user: token })
    }
    else {
        return res.json({ status: "error", user: false })
    }
})

app.listen(2500, () => {
    console.log("server is listening on port 2500");
})