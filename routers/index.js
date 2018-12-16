const express = require('express')
//引入路由模块
const router = express.Router()
//引入controller模块
const ctrl = require('../controller/index')
//请求首页
router.get('/',ctrl.getIndexHandler)



module.exports=router