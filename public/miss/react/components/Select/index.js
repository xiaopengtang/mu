import React,{Component} from "react" ;
import Back from "../Back/index" ;
import Body from "./body" ;

class Index extends Component{
	state     =  {
		"active"   :  false
	};
	constructor( props ){
		super(props)
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
		let {active,...other}  =  this.props ;
		return (
			<Back 
			active={this.state.active}
			transitionSetting={{"transitionName":'mu-fade-bottom'}} 
			onClick={this.handleClose.bind(this)}>
			    <Body {...other}/>
			</Back>
		);
	}
}

export default Index ;