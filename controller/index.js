module.exports={
    getIndexHandler(req,res){
        // res.render(渲染页面,数据对象)
        res.render('index',{
            // 当用户请求首页的时候,判断用户是否已经登录,应用模板引擎将登陆后生成的session传回客户端
            // ,客户端通过判断是否islogin属性值,得到用户是否登录了页面,再判断渲染结果
            userInfo:req.session.userInfo,
            islogin:req.session.islogin
        })
    }
}