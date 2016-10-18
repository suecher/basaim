/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  createPost:function(req,res){        //创建新帖子,ok
    var param = req.body;
    if(param.content && param.userpicture && param.userId && param.points){
      Post.create({
        content: param.content,
        userpicture: param.userpicture,
        userId:param.userId,
        points:param.points,
        commentcount:0,
        good:0

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
  getBestPost:function(req,res){        //精选动态,ok，但未体现精选的选项
    var param = req.body;
    if(param.userId && param.points ){
      Post.find({
        userId: param.userId,
        points:param.points
      },function(err,doc){

        if(doc){
          res.json({result:true,body:doc});
        } else {
          res.json({result:false,body:{err:"无精选"}});
        }
      });
    } else {
      res.json({result:false,body:{err:"缺少必要参数"}});
    }
  },
  getPost:function(req,res){        //查看帖子,ok,
    var param = req.body;
    if( param.postId  ){
      Post.find({
        id: param.postId
      },function(err,doc){

        if(doc){
          res.json({result:true,body:doc});
        } else {
          res.json({result:false,body:{err:"无精选"}});
        }
      });
    } else {
      res.json({result:false,body:{err:"缺少必要参数"}});
    }
  }

};

