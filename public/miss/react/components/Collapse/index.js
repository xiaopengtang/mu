import React,{Component,PropTypes} from "react"
import Icon from "../Icon/index"
let {"addons":{CSSTransitionGroup}}   =  React
class Item extends Component{
	static propTypes     =  {
		"label"     :  PropTypes.string
		,"index"    :  PropTypes.number
	} ;
	constructor( props ){
		super( props )
	}
	render(){
		let className    =  "mu-collapse-item"
		let active       =  this.props.curIndex === this.props.index
		active && (className += " active")
		|| ( className = className.replace(" active","") ) ;
		return (
			<div className={className}>
			    <Icon click={this.props.click}>{this.props.label}</Icon>
			    <CSSTransitionGroup component="div" transitionName="mu-fade-left">
			    	{active?(<div className="mu-collapse-body">{this.props.children}</div>):null}
			    </CSSTransitionGroup>
			</div>
		);
	}
}

class Index extends Component{
	static Item        =  Item ;
	state        =  {
		"index"  :  null
	};
	constructor( props ){
		super( props )
	}
	handleItemClick(i){
		this.setState({"index":i})
	}
	renderChild(){
		if( !this.props.children )
			return null ;
		let res      =  this.props.children.map( (node , i )=>{
			return React.cloneElement( node , 
				{"index":i
				,"curIndex":this.state.index
				,"click"  :  this.handleItemClick.bind(this,i)
			} )
		} )
		return res ;
	}
	render(){
		return (
			<div className="mu-collapse">{this.renderChild()}</div>
		);
	}
}

export default Index ;