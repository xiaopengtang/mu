import React,{Component} from "react" ;
import Base from "./base" ;
import mu from "miss.react" ;
const {Components,$handle}   =  mu ;
class Index extends Component{
	constructor( props ){
		super( props )
		this.$confirm   =  $handle({
			"key"   :  "components:Alert"
			,construct(Vnode){
				return (<Vnode title="确定删除" text="成功删除该条记录" />);
			}
		})
	}
	handleClick(){
		this.$confirm.show()
	}
	render(){
		return (
			<Base title="alert">
			    <Components.Button onClick={this.handleClick.bind(this)}>点击我</Components.Button>
			</Base>
		);
	}
}

export default Index