const express = require('express')
const app = express()

app.set('view engine','ejs')

app.set('views','./views')//写不写都可以,默认存在views里面
app.use('/node_modules',express.static('./node_modules'))
//请求首页
app.get('/',(req,res)=>{
    res.render('index',{test:'老赵打鬼'})
})
//请求注册页面
app.get('/register',(req,res)=>{
    // 因为设置了app.set('views','./views'),所以此时./目录就是在views目录下面
    res.render('./user/register')
})
//请求登录页面
app.get('/login',(req,res)=>{
    res.render('./user/login')
})
app.listen(80,()=>{
    console.log('http://127.0.0.1')
})