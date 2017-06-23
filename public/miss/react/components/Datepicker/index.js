import React,{Component} from "react" ;
import Input from "../Input/index" ;
import $handle from "../../$handle" ;
import Back from "./back" ;

class Index extends Component{
	state    =  {
		"dateValue"  :  ""
	} ;
	constructor(props){
		super( props )
		this.$handle   =  $handle({
			"key"       :  Back
			,"construct":  (Vnode)=>{
				return ( <Vnode value={this.state.dateValue} onSelect={this.handleSelect.bind(this)}/> );
			}
		})
	}
	handleSelect(day){
		this.setState({"dateValue":day})
		setTimeout(()=>{
			this.$handle.hide();
		},200)
	}
	handleWake(){
		this.$handle.show()
	}
	componentWillMount(){
		let {value}    =  this.props ;
		this.setState({"dateValue":value})
	}
	render(){
		let {value,...other}  =  this.props
		return ( <Input {...other} value={this.state.dateValue} type="text" onClick={this.handleWake.bind(this)} /> );
	}
}
export default Index ;