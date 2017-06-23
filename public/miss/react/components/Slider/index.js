import React from "react" ;
// import addons from "react/addons" ;
import miss from "miss" ;
let {transition}      =  miss.Style ;
let {Component}       =  React
// console.log( transition )
class Index extends Component{
	static defaultProps      =  {
		"children"    :  []
	};
	state             =  {
		"currentIndex":  0
		,"width"      :  0
	};
	constructor( props ){
		super( props )
		this.handleTouchStart      =  this.handleTouchStart.bind(this)
		this.handleTouchMove       =  this.handleTouchMove.bind(this)
		this.handleTouchEnd        =  this.handleTouchEnd.bind(this)
	}
	handleTouchStart(){
		// console.log( this )
	}
	handleTouchMove(){}

	handleTouchEnd(){}

	componentDidMount(){
		let $dom      =  this.refs["slider-body"]
		let width     =  $dom.offsetWidth ;
		if( width ){
			this.setState({width})
		}

	}

	render(){
		const {children,...other}     =  this.props ;
		let $children     =  children.map( (node,i)=>{
			return React.cloneElement( node , {"sort":i
				,"currentIndex":this.state.currentIndex
				,"width"  :  this.state.width
			} )
		} )
		return (
			<div {...other} 
			ref="slider-body" 
			onTouchStart={this.handleTouchStart} 
			onTouchMove={this.handleTouchMove} 
			onTouchEnd={this.handleTouchEnd} 
			className="mu-slider" 
			>
			    <div className="mu-slider-view">{$children}</div>
			    <div className="mu-slider-ctrl"></div>
		    </div>
		);
	}
}  

export default Index ;