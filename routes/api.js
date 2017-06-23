let express    =  require('express');
let router     =  express.Router();

router.get('/', function(req, res, next) {
  res.send({
  	data      :  {
  		info  :  {
  			id          :  500110
  			,username   :  "小杜鹃"
  		}
  		,menu           :  [
  		{id:2200,title:"测试",url:"//127.0.0.1:4000/",_:[]}
  		,{id:2200,title:"测试",url:"//127.0.0.1:4000/",_:[]}
  		,{id:2200,title:"测试",url:"//127.0.0.1:4000/",_:[]}
  		,{id:2200,title:"测试",url:"//127.0.0.1:4000/",_:[]}
  		,{id:2200,title:"测试",url:"//127.0.0.1:4000/",_:[]}
  		,{id:2200,title:"测试",url:"//127.0.0.1:4000/",_:[]}
  		]
  	}
  	,success  :  true
    ,errorCode:  70001
  })
});

module.exports       =   router ;
