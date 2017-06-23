import React,{Component,PropTypes} from "react" ;
import miss from "miss" ;
let {_,"Selector":$,"Number":$number,"Style":{"compatible":$compatible}}         =  miss

class Index extends Component{
	static $style        =  $compatible("transform");
	static propTypes     =  {
		"src"    :  PropTypes.string
	};
	constructor( props ){
		super( props )
	}
	componentDidMount(){
		let resource    =  this.props.resource
		_.isFunction( resource ) && resource.call( true , ()=>{} )||
		_.type( resource ) === "string" && ((src,fn)=>{
			let $i      =  new Image
			$i.src      =  src 
			$i.onload   =  ()=>{
				fn.call(true)
			}
			$i.onerror  =  ()=>{
				fn.call(true)
			}
		})(resource,()=>{
			let $item       =  this.refs.item ;
			let width       =  $($item).width()
			_.isFunction( this.props.mount ) && this.props.mount($number.div(width,REM)) ;
		}) ;
	}
	render(){
		let {index,curIndex,length,width,resource,...other}
		=  this.props ;
		let style       =  {}
		if( width !== 0 ){
			let status  =  index === curIndex && "cur" ||
			(index  === curIndex + 1 || ( index === 0 && curIndex + 1 === length ) )
			&& "next" || "prev"  ;
			let pos     =  ({
				"cur"   :  0 , "next" : width , "prev" : width * -1
			})[status] ;
			style       =  Index.$style.toObject( `translate3d(${pos+this.props.pos}rem,0,0)` );
			style.width =  width+"rem" ;
			// console.log( this.props.pos )
			/*style["transition-duration"]    =  
			this.props.pos > 0 && status === "next" && "600ms" ||
			this.props.pos < 0 && status === "prev" && "600ms" || "0ms" ;*/
			style["transition-duration"]    =  status === "next"  ? "0ms" : "600ms" ;
			style.left  =  (width * -1 * this.props.index )+"rem"
		}
		return (
			<div ref="item" {...other} style={style} className="mu-swiper-item">{this.props.children}</div>
		);
	}
}

export default Index ;