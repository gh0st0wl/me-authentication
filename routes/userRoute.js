const express = require("express")

const router = express.Router()

const { userRegister, userLogin, verifyToken, secret } = require("../controllers/userController")

router.post("/register", userRegister)
router.post("/login", userLogin)
router.get("/", verifyToken, secret)


module.exports = router