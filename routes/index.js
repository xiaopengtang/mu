var express = require('express');
var router = express.Router();
const $cache   =  require("../lib/Cache") ;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/mobile', function(req, res, next) {
  res.render('mobile', { title: 'Express' });
});

router.get('/ui', function(req, res, next) {
	let menu      =  $cache.get("menu")
  res.render('ui', { title: 'Express' , menu : JSON.stringify(menu) });
});

router.get("/menu",(req,res,next)=>{
	let menu      =  $cache.get("menu") ;
	res.send({data:{menu},status:true})
})

module.exports = router;
