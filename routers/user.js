const express = require('express')
const routerUser = express.Router()


const ctrl = require('../controller/user')


//请求注册页面
routerUser.get('/register',ctrl.getRegisterHandler)
//注册页面逻辑处理
routerUser.post('/register',ctrl.postRegisterHandler)

//请求登录页面
routerUser.get('/login',ctrl.getLoginHandler)
routerUser.post('/login',ctrl.postLoginHandler)



module.exports=routerUser