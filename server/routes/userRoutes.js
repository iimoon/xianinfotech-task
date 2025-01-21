const express = require('express');
const { handleSaveUser, handleGetUsers } = require('../controllers/userController');
const router = express.Router();

router.post('/saveUser',handleSaveUser);
router.get('/getUser',handleGetUsers)

module.exports = router;