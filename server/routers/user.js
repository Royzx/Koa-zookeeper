/**
 * restful api 子路由
 */
const router = require('koa-router')();
const userInfoController = require('./../controllers/user');

const routers = router
    .get('/info', userInfoController.getUserInfo)
    .post('/signIn', userInfoController.signIn)

module.exports = routers