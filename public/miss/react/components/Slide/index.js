import React,{Component,cloneElement}  from "react" ;
import Item from "./item" ;
import miss from "miss" ;
let {_,"Selector":$,"Style":{"compatible":$compatible},"Number":$number}     =  miss ;
//BUG LOG
//1.use REM to save df client
class Index extends Component{
	static $style      =  $compatible("transform") ;
	static Item        =  Item ;
	startPos           =  0 ;
	state              =  {
		"width"        :  0
		,"pos"         :  0
		,"maxWidth"    :  0  //以最大宽度为主
		,"maxHeight"   :  0
	} ;
	constructor( props ){
		super( props )
	}
	componentDidMount(){
	}
	handleMount($w){
		setTimeout( ()=>{
			let maxWidth        =  this.state.maxWidth
			let status          =  maxWidth < $w
			status && ( maxWidth = $w ) && this.setState({maxWidth,"width":$number.mul(maxWidth,this.props.children.length)}) 
		} , 0 )
	}
	handleStart(e){
		e.stopPropagation()
		e.preventDefault();
		let touch       =  e.touches[0]
		this.startPos   =  $number.div(touch.pageX,REM)
	}
	handleMove(e){
		e.stopPropagation()
		e.preventDefault();
		let touch       =  e.touches[0]
		let len         =  $number.div(touch.pageX ,REM ) - this.startPos 
		let pos         =  this.state.pos ;
		pos            +=  len ;
		let $w          =  this.state.maxWidth //$number.div( this.state.width , this.props.children.length );
		pos < 0 && Math.abs(pos) <= (this.state.width - $w) && this.setState({pos})
		this.startPos   =  $number.div(touch.pageX,REM)
	}
	handleEnd(){
		this.startPos      =  0 ;
		let pos      =  this.state.pos
		let ave      =  this.state.maxWidth //$number.div( this.state.width , this.props.children.length )
		for (let i = 1 ; i <=  this.props.children.length; i++) {
			let curMeta     =  i * ave ;
			let len         =  curMeta - pos*-1 ;
			if( len > 0 && len < ave ){
				let status     =  len >= $number.div( ave , 2 ) ;
				status?this.setState({"pos":(i - 1)*ave*-1}):this.setState({"pos":curMeta*-1}) ;
			    _.isFunction( this.props.switch ) && this.props.switch(status?i-1:i) ;
			    break ;
			}
		}
	}
	handleClick(){
	}
	renderItem(){
		return  this.props.children.map( (node , i)=>{
			return cloneElement( node , {
				"i"        :  i
				,"mount"   :  this.handleMount.bind(this)
				,"width"   :  this.state.maxWidth //$number.div($number.div(this.state.width,REM),this.props.children.length)
			    ,"onTouchStart"   :  this.handleStart.bind(this)
			    ,"onTouchMove"   :  this.handleMove.bind(this)
			    ,"onTouchEnd"   :  this.handleEnd.bind(this)
			} )
		} )
	}
	render(){
		let width         =  this.state.width //$number.mul(this.state.maxWidth , this.props.children.length) ;
		let style         =  Index.$style.toObject(`translateX(${this.state.pos}rem)`) ;
		width !== 0 && ( style.width  =  width+"rem" );
		console.log( style )
		return (
			<div className="mu-slide" style={{"width":"100%","overflow":"hidden"}} >
			    <div ref="body" className="mu-slide-body" style={style} >{this.renderItem()}</div>
			</div>
		);
	}
}
export default Index ;