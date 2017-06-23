import React from "react" ;
import Components from "../../components/entry" ;

const {Component}      =  React ;

class Page extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="mu-page">
			    <Components.Navbar title={this.props.title}></Components.Navbar>
			    <div className="mu-page-body">{this.props.children}</div>
			    <Components.Tabbar>
			    	<Components.Tabbar.Item title="首页" className="mu-tabbar-bar active">
			    		<i className="mu-icon-home"></i>
			    	</Components.Tabbar.Item>
			    	<Components.Tabbar.Item title="设置">
			    		<i className="mu-icon-cog"></i>
			    	</Components.Tabbar.Item>
			    	<Components.Tabbar.Item title="消息">
			    		<i className="mu-icon-commenting-o"></i>
			    	</Components.Tabbar.Item>
			    </Components.Tabbar>
			</div>
		);
	}
}

class Pager extends Component{
	static Item     =  Page ;
	constructor(props){
		super( props )
	}
	render(){
		return (<div className="mu-pager">{this.props.children}</div>);
	}
}

export default Pager