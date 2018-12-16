const express = require('express')
const fs = require('fs')
// const path = require('path')
const app = express()

// app.use(require('./routers/index'))
// app.use(require('./routers/user'))

//fs模块readdir()方法读取文件名
fs.readdir('./routers',(err,files)=>{
    console.log(files)

    //循环自动加载路由模块
    files.forEach((filename)=>{
        console.log('./routers/'+filename)
        app.use(require('./routers/'+filename))
    })
})

// 引入获取表单数据的模块
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// 引入后端渲染模板引擎模块
app.set('view engine','ejs')
app.set('views','./views')//写不写都可以,默认存在views里面
//托管静态资源(便于引用里面的文件)
app.use('/node_modules',express.static('./node_modules'))


app.listen(80,()=>{
    console.log('http://127.0.0.1')
})