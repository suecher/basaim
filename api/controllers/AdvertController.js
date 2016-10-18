/**
 * AdvertController
 *
 * @description :: Server-side logic for managing adverts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getadvert:function(req,res){        //获取广告ok
    var param = req.body;
    if(param.city ){
      Advert.find({
        city: param.city
      },function(err,doc){

        if(doc){
          res.json({result:true,body:doc});
        } else {
          res.json({result:false,body:{err:"数据不存在"}});
        }
      });
    } else {
      res.json({result:false,body:{err:"缺少必要参数"}});
    }
  }
};

