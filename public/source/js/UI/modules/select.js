import React,{Component} from "react" ;
import Base from "./base" ;
import mu from "miss.react" ;
const {Components,$handle}     =  mu ;
class Index extends Component{
	constructor(props){
		super(props)
		this.$handle   =  $handle({
			"key"      :  "components:Select"
			,construct(Vnode){
				return <Vnode />
			}
		})
	}
	handleClick(){
		this.$handle.show()
	}
	render(){
		return (
			<Base title="select">
			    <Components.Button onClick={this.handleClick.bind(this)}>点击我</Components.Button>
			</Base>
		);
	}
}
export default Index