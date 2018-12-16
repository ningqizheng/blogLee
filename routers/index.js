const express = require('express')
const router = express.Router()

//请求首页
router.get('/',(req,res)=>{
    // res.render(渲染页面,数据对象)
    res.render('index',{test:'老赵打鬼'})
})



module.exports=router