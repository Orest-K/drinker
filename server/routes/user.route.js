const router = require('express').Router();

const { userController } = require('../controllers')
const { userMiddleware } = require('../middlewares')

router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

router.get('/:userId', userMiddleware.checkIsUserPresent, userController.getUserById);

router.delete('/:userId', userMiddleware.checkIsUserPresent, userController.deleteUserById);

module.exports = router;