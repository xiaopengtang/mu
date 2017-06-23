import React,{Component} from "react" ;
import Base from "./base" ;

class Index extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<Base title="首页">
				<h2 className="m-title">Miss React</h2>
				<div className="m-item">
				    <div className="m-item-title">
				        <div className="m-item-txt">Demo</div>
				        <i className="mu-icon-chevron-right"></i>
				    </div>
				</div>
				<div className="m-item">
				    <div className="m-item-title">
				        <div className="m-item-txt">说明</div>
				        <i className="mu-icon-chevron-right"></i>
				    </div>
				    <div className="m-item-sub">
				        miss.react是基于miss与react的一套UI组件库，用于解决移动端的快速建站
				    </div>
				</div>
			</Base>
		);
	}
}

export default Index