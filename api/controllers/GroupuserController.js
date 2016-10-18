/**
 * GroupuserController
 *
 * @description :: Server-side logic for managing groupusers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //加入部落ok
  joinGroup:function(request,response){
    var param=request.body;
    if(param.userId && param.groupId){
      Groupuser.create({
        userId:param.userId,
        groupId:param.groupId
      },function(error,doc){
        if(doc){
          response.json({result:true,body:doc});
        }else{
          response.json({result:true,body:{error:"加入失败"}});
        }
      });
    }else{
      response.json({result:false,body:{error:"缺少必要的参数"}});
    }
  },
  //退出部落ok
  QuitGroup:function(request,response) {
    var param = request.body;
    if (param.userId && param.groupId) {
      Groupuser.destroy({
        userId: param.userId,
        groupId: param.groupId
      }, function (error, doc) {
        if (doc.length > 0) {
          response.json({result: true, body: "退出成功"});
        } else {
          response.json({result: true, body: {error: "退出失败"}});
        }
      });
    } else {
      response.json({result: false, body: {error: "缺少必要的参数"}});
    }
  },
  //我加入的部落，返回部落id需要部落名称等信息,hold
  myJoinGroup:function(request,response){
    var param=request.body;
    if(param.userId){
      Groupuser.find({
        userId:param.userId
      },function(error,doc){
        if(doc){
          response.json({result:true,body:doc});
        }else{
          response.json({result:false,body:{error:"该部落不存在"}});
        }
      });
    }else{
      response.json({result:false,body:{error:"缺少必要的参数"}});
    }
  },
};

