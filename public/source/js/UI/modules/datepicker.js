import React,{Component} from "react" ;
import mu from "miss.react" ;
const {Components}    =  mu ;
import Base from "./base" ;

class Index extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<Base title="Datepicker">
			    <Components.Datepicker />
			</Base>
		);
	}
}

export default Index ;