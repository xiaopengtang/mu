import React,{Component} from "react" ;
import Back from "../Back/index" ;
const {"addons":{CSSTransitionGroup}}  =  React
class Index extends Component{
	state    =  {
		"active"  :  false
	} ;
	constructor(props){
		super( props )
	}
	componentWillMount(){
		this.state.active   =  this.props.active
	}
	componentWillReceiveProps( props ){
		let {active}  =  props
		this.setState({active})
	}
	handleClose(){
		let active   =  false 
		this.setState({active})
	}
	render(){
		let {title,text}   =  this.props
		return (
			<Back 
			onClick={this.handleClose.bind(this)}
			transitionSetting={{"className":"mu-back-body","component":"div","transitionName":"mu-fade-scale-big"}}
			active={this.state.active}>
				<div className="mu-alert">
		    		<div className="mu-alert-body">
		    		    <h2>{title}</h2>
		    		    <div className="sub-txt">{text}</div>
		    		</div>
		    		<div className="mu-alert-btm" onClick={this.handleClose.bind(this)}>确定</div>
		    	</div>
			</Back>
		);
	}
}

export default Index ;