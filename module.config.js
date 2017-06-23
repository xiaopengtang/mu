//配置
module.exports            =  {
	"src"                 :  {
		"js"              :  {
			"miss":"./public/miss/miss.js"
			,"ui" :'./public/source/js/ui.js'  
			,"app":'./public/source/js/entry.js'
		    // ,"web" :  "./public/source/js/web.js"
		    // ,"miss.vue" : "./public/miss/miss.vue.js"
		    ,"miss.react" : "./public/miss/miss.react.js"
		}
		,"less"           :  [
		"public/miss/less/miss.web.static.less"
		// ,"public/miss/less/miss.web.less"
		,"public/miss/less/miss.mobile.less"
		// ,"public/miss/less/ui.less"
		
		]
	}
	,"watch"              :  {
		"less"            :  ["public/miss/less/**/*.less"]
		// ,"js"             :  [""]
	}
	,"dist"               :  {
		"js"              :  "/public/dist/"
		,"css"            :  "public/dist"
	}
	,"header"             :  ""
}