import React,{Component,PropTypes} from "react" ;
import miss from "miss" ;
const {_,"Style":{read,compatible},"Selector":$,"Number":$number}       =  miss ;
console.log( miss)
const {"addons":{CSSTransitionGroup}} = React
class Index extends Component{
	$transform   =  compatible("transform") ;
	state    =  {
		"height" :  0 
		,"allow" :  true
		,"move"  :  0
		,"scrollHeight"  :  0
		,"bodyHeight"    :  0
		,"start"   :  0
	} ;
	static propTypes    =  {
		"move"    :  PropTypes.func
	} ;
	constructor( props ){
		super( props ) ;
		// console.log( this.$transform )
	}
	updateHeight(){
		const $scroll   =  $(this.refs.scroll) ;
		const $body     =  $(this.refs.body) ;
		const scrollHeight  =  $number.div( $scroll.height() , REM )
		const bodyHeight    =  $number.div( $body.height() , REM )
		const allow     =  bodyHeight > scrollHeight
		if( !allow ){
			return  ;
		}
		this.setState({allow,scrollHeight,bodyHeight})
	}
	getBodyStyle(){
		let style    =  this.$transform.toObject(`translate3d(0rem,${this.state.move}rem,0rem)`) ;
		return style
	}
	getScrollStyle(){
		return {}
	}
	componentDidMount(){
		this.updateHeight() ;
	}
	moveStart(e){
		if( !this.state.allow ){
			return ;
		}
		e.stopPropagation()
		e.preventDefault();
		const $touch   =  e.touches[0]
		const start    =  $number.div( $touch.pageY , REM )
		this.setState({start})
	}
	move(e){
		if( !this.state.allow ){
			return ;
		}
		e.stopPropagation()
		e.preventDefault();
		let {start,move,scrollHeight,bodyHeight}  =  this.state
		const $touch   =  e.touches[0]
		const end      =  $number.div( $touch.pageY , REM )
		let max        =  $number.add( bodyHeight , scrollHeight * -1 )
		move          +=  $number.add(end,start*-1)
		move           =  move > 0 ? 0 : Math.abs(move) > Math.abs(max) ? max * -1 : move
		this.setState({"start":end,move})
	}
	moveEnd(e){
		if( !this.state.allow ){
			return ;
		}
		this.setState({"start":0}); //释放
	}
	render(){
		let {children,className,...other}  =  this.props ;
		return (
			<div 
			ref="scroll"
			className={`mu-scrollbar ${className?className:""}`} {...other} >
			    <div 
			    ref="body"
			    onTouchStart={this.moveStart.bind(this)}
			    onTouchMove={this.move.bind(this)}
			    onTouchEnd={this.moveEnd.bind(this)}
			    style={this.getBodyStyle()}
			    className="mu-scrollbar-body" >{children}</div>
			</div>
		);
	}
}

export default Index ;