const express = require("express")

const {home , createuser , getUsers , deleteUser , editUSer, editUser} = require("../controllers/userController.js")

const router = express.Router()

router.get("/", home)
router.post('/createuser' , createuser)
router.get('/getalluser' , getUsers)
router.delete('/deleteuser/:id' , deleteUser)
router.put('/edituser/:id' , editUser)

module.exports = router