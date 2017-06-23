import React,{Component,PropTypes} from "react" ;

class Item extends Component{
	static propTypes     =  {
		"title"    :  PropTypes.string
	} ;
	constructor( props ){
		super( props ) ;
	}
	render(){
		let {children,...other}    =  this.props ;
		return (
			<div className="mu-tabbar-bar" {...other}>{children}{this.props.title?<h2>{this.props.title}</h2>:null}</div>
		);
	}
}

class Index extends Component{
	static Item      =  Item ;
	constructor( props ){
		super( props ) ;
	}
	render(){
		return (
			<div className="mu-tabbar">{this.props.children}</div>
		);
	}
}

export default Index ;