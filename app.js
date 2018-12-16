const express = require('express')
const fs = require('fs')
// const path = require('path')
const app = express()

// app.use(require('./routers/index'))
// app.use(require('./routers/user'))

//app模块只挂载路由,fs模块readdir()方法读取文件名
fs.readdir('./routers',(err,files)=>{
    // console.log(files)

    //循环自动加载路由模块
    files.forEach(filename=>{
        // console.log('./routers/'+filename)
        app.use(require('./routers/'+filename))
    })
})
// 导入session
const session = require('express-session')
// 注册session中间件
// app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
//   设置过期时间,如果不设置,默认关闭浏览器即过期,无法存储有效cookie
  cookie: { maxAge:5000000000000000000000000000000000000000000000000000 }
}))
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