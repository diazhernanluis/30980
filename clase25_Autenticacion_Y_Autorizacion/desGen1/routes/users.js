const routes = require('express').Router();
const { login } = require('../middlewares/auth');
const { getUserInfo } = require('../controllers/users');


routes.get('/datos', passsport.authenticate('login'), getUserInfo);


module.exports = routes