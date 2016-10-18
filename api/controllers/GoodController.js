/**
 * GoodController
 *
 * @description :: Server-side logic for managing goods
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //创建点赞,如果是点赞帖子commentId为null，type=1,post表good+1，如果点赞评论就传commentId，type=2，comment表要+1，待评论表出来测试,commentId暂时未做判断是否传入

  createGood:function(req,res){
    var param = req.body;
    if(param.type && param.userId  && param.postId){
      Good.create({
        type: param.type,
        userId: param.userId,
        commentId:param.commentId,
        postId:param.postId
      },function(err,doc){
        if(doc){
          res.json({result:true,body:doc});
          if(param.type == 1){
            Post.findOne({id:param.postId},function(err,doc){
              if(err)
              if(doc != undefined){
                Post.update({id:param.postId},{good:doc.good + 1},function(err,postdoc){
                  console.log("更新成功 + 1");
                });
              }
            });
          }
          else if(param.type == 2){
            comment.findOne({id:param.commentId},function(err,doc){
              if(err)
                if(doc != undefined){
                  comment.update({id:param.postId},{good:doc.good + 1},function(err,commdoc){
                    console.log("更新成功 + 1");
                  });
                }
            });
          }
        } else {
          res.json({result:false,body:{err:"用户数据不存在"}});
        }
      });
    } else {
      res.json({result:false,body:{err:"缺少必要参数"}});
    }
  }
};

