import mu from "miss.react" ;
import React, {Component}  from "react" ;
const {Components}      =   mu ;
class Index extends Component{
	static defaultProps =  {
		"active"       :  "components"
	} ;
	constructor(props){
		super(props)
	}
	handleCtrl(){}
	handleComponent(){
		location.hash     =  "components"
	}
	render(){
		let {...other}    =  this.props ;
		return (
			<div className="m-app"> 
			    <Components.Navbar {...other} rightIcon={this.props.rightIcon} title={this.props.title}></Components.Navbar>
			    <div className={`m-body ${this.props.className?this.props.className:""}`}>{this.props.children}</div>
			    <Components.Tabbar>
			        <Components.Tabbar.Item title="首页" className={`mu-tabbar-bar${this.props.active === "index"?' active':''}`}>
			            <i className="mu-icon-home"></i>
			        </Components.Tabbar.Item>
			    	<Components.Tabbar.Item title="组件" className={`mu-tabbar-bar${this.props.active === "components"?" active":""}`}  onClick={this.handleComponent.bind(this)}>
			    		<i className="mu-icon-commenting-o"></i>
			    	</Components.Tabbar.Item>
			    	<Components.Tabbar.Item title="设置" className={`mu-tabbar-bar${this.props.active === "setting"?" active":""}`} >
			    		<i className="mu-icon-cog"></i>
			    	</Components.Tabbar.Item>
			    </Components.Tabbar>
			</div>
		);
	}
}

export default Index ;