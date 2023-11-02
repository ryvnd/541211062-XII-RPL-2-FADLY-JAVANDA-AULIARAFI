const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/user')

router.get('/users', usercontroller.index)

let users = [
    {id : 1, nama: "Rafi", email: "rafi@gmail.com"},
    {id : 2, nama: "Fadly", email: "fadly@gmail.com"},
]
router.get('/users', usercontroller.index)

router.post('/user', usercontroller.store)

router.put('/user/:id', usercontroller.update)

router.delete('/user/:id', usercontroller.delete)

module.exports = router