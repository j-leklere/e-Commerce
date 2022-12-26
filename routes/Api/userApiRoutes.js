const express = require('express')
const router = express.Router()

const userApi = require('../../controllers/Api/userApi')

router.get('/',userApi.allUsers);

router.get('/:id', userApi.profile)

module.exports = router