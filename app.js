const express = require('express')
const app = express()

app.set('view engine','ejs')

// app.set('views','./views')写不写都可以,默认存在views里面


app.get('/',(req,res)=>{
    res.render('index',{test:'老赵打鬼'})
})

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})