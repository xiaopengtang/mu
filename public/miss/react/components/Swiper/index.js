import React,{Component,PropTypes} from "react" ;
import Item  from "./item" ;
import MuImg from "../Img/index"
import miss from "miss"
let {_,Img,"Selector":$,"Number":$number,"Style":{$compatible}}       =  miss 

class Index extends Component{
	// static $style      =  $compatible("transform");
	static Item        =  Item ;
	static propTypes   =  {
		"theme"        :  PropTypes.string
		,"time"        :  PropTypes.number
	} ;
	timer              =  null ;
	static defaultProps=  {
		"time"         :  3000
	}
	state              =  {
		"maxWidth"     :  0
		,"width"       :  0
		,"index"       :  0
		,"pos"         :  0
	};
	startPos           =  0 ;
	componentDidMount(){
		this.setTimer();
	}
	setTimer(){
		if(this.timer)
			return  ;
		this.timer     =  setInterval( ()=>{
			let length =  this.props.children.length
			let index  =  this.state.index
			index     +=  1
			index      =  index === length ? 0 : index
			this.setState({index})
		} , this.props.time  )
	}
	clearTimer(){
		clearInterval( this.timer )
		this.timer     =  null ;
	}
	themeList(type,props){
		let _this      =  this ;
		let theme      =  {
			"img"      :  (<img src={props.resource} />)
			,"item"    :  (<div classNam="mu-swiper-body">{props.children}</div>)
		}
		return theme[type] || theme.item
	} ;
	constructor( props ){
		super( props )
	}
	handleStart(e){
		this.clearTimer();
		e.stopPropagation()
		e.preventDefault();
		let touch       =  e.touches[0]
		this.startPos   =  $number.div(touch.pageX,REM)
	}
	handleMove(e){
		e.stopPropagation()
		e.preventDefault()
		let touch       =  e.touches[0]
		let len         =  $number.div(touch.pageX ,REM ) - this.startPos 
		let pos         =  this.state.pos ;
		pos            +=  len ;
		// let $w          =  this.state.maxWidth //$number.div( this.state.width , this.props.children.length );
		this.setState({pos})
		this.startPos   =  $number.div(touch.pageX,REM)
	}
	handleEnd(){
		this.setTimer();
		this.startPos      =  0 ;
		let pos      =  this.state.pos
		let maxWidth =  this.state.maxWidth //$number.div( this.state.width , this.props.children.length )
		let index    =  this.state.index
		let length   =  this.props.children.length
		Math.abs( pos ) <= maxWidth * .5 ? index : ( pos < 0 ? index++ : index-- )
		index === length && (index = 0 ) || index < 0 && ( index = length - 1 );
		console.log( [pos,maxWidth*.5,index,length] )
		// for (let i = 1 ; i <=  this.props.children.length; i++) {
			/*let curMeta     =  i * ave ;
			let len         =  curMeta - pos*-1 ;
			index           =  i - 1
			if( len > 0 && len < ave ){
				let status     =  len >= $number.div( ave , 2 ) ;
				status && index-- ;
				// status?this.setState({"pos":(i - 1)*ave*-1}):this.setState({"pos":curMeta*-1}) ;
			    _.isFunction( this.props.switch ) && this.props.switch(index) ;
			    break ;
			}*/
		// }
		this.setState({index,"pos":0})
	}
	renderItem(){
		let theme       =  this.props.theme
		return this.props.children.map( (node,i)=>{
			let {props}        =  node ;
			return React.cloneElement(node,{
				"width"    :  this.state.maxWidth
				,"resource":  props.resource
				,"index"   :  i 
				,"curIndex":  this.state.index
				,"length"  :  this.props.children.length
				,"pos"     :  this.state.pos
				,"mount"   :  (width)=>{
					let maxWidth    =  this.state.maxWidth
					maxWidth < width && (maxWidth = width) &&
					this.setState({maxWidth,"width":maxWidth*this.props.children.length})
				}
				,"onTouchStart"   :  this.handleStart.bind(this)
			    ,"onTouchMove"    :  this.handleMove.bind(this)
			    ,"onTouchEnd"     :  this.handleEnd.bind(this)
			},this.themeList(theme,props))
		} ) ;
	}
	render(){
		let width    =  this.state.width , style = {} ;
		width!==0 && (style = {"width":this.state.width+"rem"}) ;
		return (
			<div className="mu-swiper">
			    <div className="mu-swiper-container" style={style}>{this.renderItem()}</div>
			</div>
		);
	}
}

export default Index ;