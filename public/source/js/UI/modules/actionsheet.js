import React,{Component}  from "react" ;
import Base from "./base" ;
import mu from "miss.react" ;
const {Components,$handle}   =  mu ;
class Index extends Component{
	constructor( props ){
		super(props) ;
		let _this    =  this
		this.$actionsheet  =  $handle({
			"key" : "components:Actionsheet"
			,construct(Vnode){
				return ( <Vnode body={[{"text":"拍照",onClick(){}},{"text":"从相册选择",onClick(){}}]}/> );
			}
		})
		this.$confirm  =  $handle({
			"key" : "components:Actionsheet"
			,construct(Vnode){
				return ( <Vnode body={[{"text":"确定",onClick(){}}]}/> );
			}
		})
		console.log( this.$actionsheet )
	}
	handleWake(){
		this.$actionsheet.show()
	}
	handleConfirm(){
		this.$confirm.show(); 
	}
	render(){
		return (
			<Base title="actionsheet">
			    <Components.Button onClick={this.handleConfirm.bind(this)}>confirm</Components.Button>
			    <Components.Button style={{"marginTop":".1rem"}} onClick={this.handleWake.bind(this)}>自定义</Components.Button>
			</Base>
		);
	}
}
export default Index