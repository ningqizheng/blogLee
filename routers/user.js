const express = require('express')
const routerUser = express.Router()


// 引入mysql模块
const mysql = require('mysql')
const conn =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog'
  })
//引入时间模块
const moment = require('moment')


//请求注册页面
routerUser.get('/register',(req,res)=>{
    // 因为设置了routerUser.set('views','./views'),所以此时./目录就是在views目录下面
    res.render('./user/register')
})
//注册页面逻辑处理
routerUser.post('/register',(req,res)=>{

    let userInfo = req.body//获取到从客户端穿过来的用户信息
    // console.log(userInfo)
    // 第一步做表单验证
    if(!userInfo.username||!userInfo.password||!userInfo.nickname) return res.status(400).send({status:400,msg:'请输入正确的用户信息'})
    // console.log(res);
    //第二步:链接数据库查重
    const sql1 = 'select count(*) as count from users where username = ?'
    conn.query(sql1,userInfo.username,(err,result)=>{
        if(err) return res.status(400).send({status:400,msg:'查重失败请重试!'})
        // console.log(result)
        if(result[0].count!==0) return res.send({status:200,msg:'用户名重复请重试'})

        res.redirect('/login')//--------------服务器操作客户端页面重定向----------------

        // 查重完成后说明该用户可以被注册
        // 在被添加到数据库之前需要手动添加创建时间字段,引入moment包
        userInfo.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
        console.log(userInfo)
        // 连接数据库,添加数据
        const sql2 = 'insert into users set ?'
        conn.query(sql2,userInfo,(err,result)=>{
            if(err) return res.status(400).send({status:400,msg:'注册失败请重试!'})
            // console.log(result)
            // 数据库插入成功,向客户端返回注册成功
            res.send({status:200,msg:'注册成功!'})
        })
    })
})

//请求登录页面
routerUser.get('/login',(req,res)=>{
    res.render('./user/login')
})
routerUser.post('/login',(req,res)=>{
    let userInfo = req.body
    // console.log(userInfo)
    const sql3 = 'select * from users where username = ? and password = ?'
    conn.query(sql3,[userInfo.username,userInfo.password],(err,result)=>{
        if(err || result.length==0) return res.status(400).send({status:400,msg:'登录失败,请重试'})
        res.send({status:200,msg:'登录成功'})
    })
})



module.exports=routerUser