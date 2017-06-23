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
			<Base title="collapse">
			    <Components.Collapse>
			    	<Components.Collapse.Item label="标题">测试</Components.Collapse.Item>
			    	<Components.Collapse.Item label="标题">测试</Components.Collapse.Item>
			    	<Components.Collapse.Item label="标题">测试</Components.Collapse.Item>
			    </Components.Collapse>
			</Base>
		);
	}
}

export default Index