const express = require('express');
const router = express.Router();
const fs = require('fs');
const accountRoutes = require('./account.js')
router.use(accountRoutes)
const userController = require('../controllers/user.controllers');

router.post('/', userController.createUser);
router.get('/', userController.readUsers);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
