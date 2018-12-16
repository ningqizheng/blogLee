module.exports={
    getAddArticleHandler(req,res){
        if(!req.session.islogin) return res.redirect('/')
        res.render('./article/add',{
            userInfo:req.session.userInfo ,
            islogin:req.session.islogin
        })
    }
}