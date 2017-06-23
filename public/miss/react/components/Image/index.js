import React,{Component,PropTypes,cloneElement} from "react" ;
import Item from "./item" ;
import View from "./view" ;

class index extends Component{
	static Item  =  Item ;
	state        =  {
		"urlList"   :  []
		,"index"    :  0
	} ;

	renderItem(){
		let {children}    =  this.props ;
		return children.map( (item,key) => {
			return cloneElement( item , {
				"onClick" :  this.handleClick.bind(this,key)
				,"onComplete"   :  this.handleItemComplete.bind(this)
			} )
		} )
	}
	handleClick(key){}

	handleItemComplete(src){
		let {urlList}      =  this.state ;
		urlList.push(src) ;
		this.setState({urlList})
	}

	render(){
		let {children,...other}    =  this.props ;
		return (
			<div 
			{...other} 
			className="mu-img-list"
			onClick={this.handleClick.bind(this)}
			>{children}</div>
		);
	}
}

export default index