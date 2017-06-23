import React,{Component} from "react" ;
import Base from "./base" ;
import mu from "miss.react" ;
const {Components,$handle}   =  mu ;
class Index extends Component{
	constructor( props ){
		super( props )
		
	}
	
	render(){
		return (
			<Base title="scrollbar">
			    <Components.Scrollbar>
			        <div style={{"height":"2.5rem","backgroundColor":"red"}}></div>
			    </Components.Scrollbar>
			</Base>
		);
	}
}

export default Index