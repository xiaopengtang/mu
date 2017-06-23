import _ from "../core/Common.core" ;

class $transition{
	static transition   =  (function(fn){
		return fn.call(true)
	})(function(){
		let $dom        =  document.createElement("div")
		let supportList =  ["-webkit-transition","transition"
		,"-moz-transition","-ms-transition","-o-transition"] ;
		let arr         =  _.find( supportList , (v)=>{
			return v in $dom.style ;
		} ) || []
		return arr[0] ;
	}) ;

	static cssPrefix    =  (function(){
		let transition  =  $transition.transition ;
		if(!transition){
			return "" ;
		}
		let r           =  /^-([a-z]+)-([a-z]+)$/ ;
		let status      =  r.test(transition)
		if(!status)
			return "" ;
		return ["-",RegExp.$1,"-"].join("") ;
	})() ;

	constructor(){
		if( $transition.transition === null )
			return _.warn("该浏览器不支持transition属性")
	}

	getStyleByText(style,isObject){
		if( isObject ){
			let ret         =  {}
			ret[$transition.transition]    =  style ;
		}else{
			let ret         =  `${$transition.transition}:${style}`
		}
		return ret ;
	}
}


const transition            =  new $transition ;


export default transition