module.exports={
    getIndexHandler(req,res){
        // res.render(渲染页面,数据对象)
        res.render('index',{test:'老赵打鬼'})
    }
}