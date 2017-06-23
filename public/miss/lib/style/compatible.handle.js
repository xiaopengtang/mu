import _ from "../core/Common.core" ;

const defaultProps  =  {
	"transform"     :  ["-webkit-transform","transform","-moz-transform","-ms-transform","-o-transform"]
	,"transition"   :  ["-webkit-transition","transition","-moz-transition","-ms-transition","-o-transition"]
    ,"-webkit-line-clamp"   :  ["-webkit-line-clamp"]
}

class compatible {
	static getCompatibleProps(props){
		let keys    =  _.keys( defaultProps )
		if( !_.inArray( props , keys ) )
		    return props
		let propsList    =  _.find( defaultProps , (v , k)=>{
			return k === props
		} )[0]
		let $div    =  document.createElement("div")
		let arr     =  _.find( propsList , (v)=>{
			return v in $div.style ;
		} ) || []
		return arr[0] ;
	}
	static getCompatibleCssprefix(props){
		let r           =  /^-([a-z]+)-([a-z]+)$/ ;
		let status      =  r.test(props)
		if(!status)
			return "" ;
		return ["-",RegExp.$1,"-"].join("") ;
	}
	constructor(props){
		this.$props      =  compatible.getCompatibleProps( props )
		if( this.$props == null ){
			_.warn("该属性不存在："+props) ;
			this.$cssPrefix    =  ""
		}else{
			this.$cssPrefix    =  compatible.getCompatibleCssprefix( this.$props )
		}
	}

	toTxt( style ){
		return `${this.$props}:${style}`;
	}

	toObject(style){
		let ret      =  {} ;
		ret[this.$props]       =  style
		return ret ;
	}
}

export default ( props )=>{
	return new compatible( props )
}