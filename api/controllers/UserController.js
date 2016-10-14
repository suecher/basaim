/**
* UserController
*
* @description :: Server-side logic for managing users
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
  */

module.exports = {

  login:function(req,res){

    var param = req.body;



    if(param.username && param.password){
      User.findOne({
        username: param.username,
        password: param.password
      },function(err,doc){

        if(doc){
          res.json({result:true,body:doc});
        } else {
          res.json({result:false,body:{err:"用户数据不存在"}});
        }

      });


    } else {
      res.json({result:false,body:{err:"缺少必要参数"}});
    }
  },
  test:function(req,res){
    res.send("Hello");
  }

};
