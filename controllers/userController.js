const express = require("express")
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const userRegister = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username })
        if (user) {
            return res.status(403).json({ message: "böyle bi kullanıcı zaten mevcut" })
        }
        if (!username || !password) {
            return res.status(400).json({ message: "kullanıcı adı veya parola boş geçilemez" })
        }
        const hashedpassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({ username, password: hashedpassword })
        res.status(200).json(newUser)
    }
    catch (err) {
        res.status(400).json({ message: err })
    }
}
const userLogin = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username })
        const ismatch = await bcrypt.compare(password, user.password)
        if (!user || !ismatch) {
            return res.status(403).json({ message: "kullanıcı adı veya şifre hatalı" })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.json({ token })
    }
    catch (err) {
        res.status(400).json({ message: err })
    }
}

const verifyToken = async (req, res, next) => {
    const token = req.headers["authorization"]
    if (!token) {
        return res.status(403).json({ message: "token eksik" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    }
    catch (err) {
        res.status(401).json({ message: err })
    }
}
const secret = (req, res) => {
    res.status(200).json({ message: "gizli link" })
}
module.exports = { userRegister, userLogin, verifyToken, secret }