import React,{Component} from "react" ;
import Base from "./base" ;
import mu from "miss.react" ;
const {Components,$handle}   =  mu ;

class Index extends Component{
	constructor( props ){
		super( props ) ;
	}
	render(){
		return (
			<Base title="tabs">
			    <Components.Tabs>
			    	<Components.Tabs.Item label="标题">测试</Components.Tabs.Item>
			    	<Components.Tabs.Item label="标题">测试</Components.Tabs.Item>
			    	<Components.Tabs.Item label="标题">测试</Components.Tabs.Item>
			    </Components.Tabs>
			</Base>
		);
	}
}

export default Index