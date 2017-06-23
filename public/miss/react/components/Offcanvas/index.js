import React from "react" ;
let {Component,"addons":{CSSTransitionGroup}}   =  React

class Index extends Component{
	state     =  {
		"active"   :  null
	} ;
	componentWillReceiveProps(props){
		let show    =  props.active ;
		if( typeof show != "boolean" || this.state.active === show )
			return ;
		this.setState({"active":!this.state.active})
	}
	constructor(props){
		super( props ); 
	}
	handleClose(){
		this.setState({"active":false})
	}
	handleBody(e){
		e.stopPropagation()
	}
	render(){
		this.state.active === null && (this.state.active = !!this.props.active);
		return (
			this.state.active?<div className="mu-offcanvas" onClick={this.handleClose.bind(this)}>
			    <div onClick={this.handleBody.bind(this)} className="mu-offcanvas-body mu-effect-card">{this.props.children}</div>
			</div>:null
		);
	}
}

export default Index ;