const express = require('express')
const router = express.Router()
const todos = require('./modules/todos')
const users = require('./modules/users')
const home = require('./modules/home')

router.use('/users', users)
router.use('/todos', todos)
router.use('/', home)

module.exports = router