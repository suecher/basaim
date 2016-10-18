/**
 * GroupController
 *
 * @description :: Server-side logic for managing groups
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //创建部落,少传参数也可以传入
	createGroup:function(request,response){
    var param=request.body;
    if(param.groupname &&
      param.intro &&
      param.userId &&
      param.type &&
      param.background &&
      param.points){
      Group.create({
        groupname:param.groupname,
        intro:param.intro,
        userId:param.userId,
        type:param.type,
        background:param.background,
        points:param.points
      },function(error,doc){
        if(doc){
          response.json({result:true,body:doc});
        }else{
          response.json({result:false,body:{error:"创建失败"}});
        }
      });
    }else{
      resposne.json({result:false,body:{error:"缺少必要的参数"}});
    }
  },

  //我创建的部落ok
  myGroup:function(request,response){
    var param=request.body;
    if(param.userId){
      Group.find({
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

  //推荐部落ok
  recommendGroup:function(request,response){
    var param=request.body;
    console.log(param);
    if(param.userId && param.points){
      Group.find({
        userId:param.userId,
        points:param.points
      },function(error,doc){
        if(doc){
          response.json({result:true,body:doc});
        }else{
          response.json({result:false,body:{error:"推荐失败"}});
        }
      });
    }else{
      response.json({result:false,body:{error:"缺少必要的参数"}});
    }
  }
};

