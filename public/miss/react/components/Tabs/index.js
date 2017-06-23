import React,{Component,PropTypes} from "react" ;
import miss from "miss"
let {"addons":{CSSTransitionGroup}}  =  React ;
const {_}      =  miss

class Item extends Component{
	constructor( props ){
		super(props);
	}
	ComponentDidLeave(){
		console.log("this is ...")
	}
	render(){
		const active        =  this.props.index === this.props.curIndex
		return (
			<CSSTransitionGroup 
			className="mu-tab" 
			component="div" 
			transitionLeave={false} 
			transitionName="mu-fade-left">
			    {active?(<div className="mu-tab-body">{this.props.children}</div>):null}
			</CSSTransitionGroup>
		);
	}
}

class Index extends Component{
	static propTypes    =  {};
	static Item      =  Item ;
	state          =  {
		"index"    :  0
	};
	constructor( props ){
		super( props )
	}
	handleTitleClick(i){
		this.setState({"index":i})
	}
	renderItem(){
		if(!this.props.children)
			return
		let titles   =  []
		let items    =  this.props.children.map( (node,i)=>{
			let {label}      =  node.props ;
			let active       =  this.state.index === i ;
			let className    =  "mu-tabs-title"
			active && ( className += " active" ) 
			|| ( className = className.replace(" active","") );
			titles.push(<div onClick={this.handleTitleClick.bind(this,i)} className={className} data-index={i}>{label}</div>) ;
			return React.cloneElement(node,{
				"index"      :  i
				,"curIndex"  :  this.state.index
			})
		} )
		return {titles,items}
	}
	render(){
		let {titles,items}     =  this.renderItem()
		return (
			<div className="mu-tabs">
			    <div className="mu-tabs-header">{titles}</div>
			    <div className="mu-tabs-body">{items}</div>
			</div>
		);
	}
}

export default Index