import React from "react" ;
// import addons from "react-addons" ;

console.log( React )

// let {classSet}        =  addons

let {Component,PropTypes}       =  React

class Index extends Component{
	static PropTypes  =  {
		"label"       :  PropTypes.string
	}

	constructor( props ){
		super( props )
	}

	render(){
		let {width,...other}  
		=   this.props ;
		// console.log( this.props.sort , this.props.currentIndex )
		return (
			<div {...other} 
			className="mu-slider-item"
			style={{width}}
			>{this.props.children}</div>
		);
	}
}  

export default Index ;