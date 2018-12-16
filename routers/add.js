const express = require('express')
const routerUser = express.Router()


const ctrl = require('../controller/article')

//请求文章列表页
routerUser.get('/add',ctrl.getAddArticleHandler)
module.exports=routerUser