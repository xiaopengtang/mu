import React , { Component } from "react" ;
import miss from "miss" ;
const {_,$handle}     =  miss

class Index extends Component{
	state     =  {
		"status"   :  true
	} ;
	constructor( props ){
		super( props )
	}
	componentWillReceiveProps(props){
		let {status}     =  props ;
		this.setState({status})
	}
	componentDidUpdate(){
		_.isFunction( this.props.updated )
		&& this.props.updated(this.state.status) ;
	}
	handleBody(e){
		e.stopPropagation() ;
	}
	handleClose(e){
		this.setState({"status":false})
	}
	componentDidMount(){
		_.isFunction( this.props.updated )
		&& this.props.updated(this.state.status) ;
	}
	render(){
		return (
			this.state.status ? (<div className="mu-modal" onClick={this.handleClose.bind(this)}>
			    <div className="mu-modal-container" onClick={this.handleBody.bind(this)}>{this.props.children}</div>
			</div>):null
		);
	}
}

export default Index ;