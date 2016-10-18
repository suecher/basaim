/**
* UserController
*
* @description :: Server-side logic for managing users
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
  */

var number=parseInt(Math.random()*10000);
console.log(number)
///随机数

module.exports = {
  getNumber:function(req,res){        //获取验证码
    var param = req.body;
    if(param.mobile ){
      res.json(number)
    } else {
      res.json({result:false,body:{err:"缺少必要参数"}});
    }
  },
  login:function(req,res){        //登录ok
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
  createUser:function(req,res){        //注册ok
    var param = req.body;
    if(param.mobile && param.password && param.code){
      User.create({
        mobile: param.mobile,
        password: param.password,
        username:param.mobile
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
  getUsermessage:function(req,res){     //用户信息，好友信息ok
    var param = req.body;
    if(param.userId){
      User.find({
        id: param.userId
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
  UpdateUser:function(req,res){   //修改个人信息，修改内容待修改
    var param = req.body;
    var obj = req.body.updateobj

    if(param.userId){
      User.update({
        id:param.userId
      },obj,function(err,doc){
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



};
