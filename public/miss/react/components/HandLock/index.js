import React ,{Component} from "react" ;

class Index extends Component{
	constructor( props ){
		super( props )
	}
	componentDidMount(){
		let $canvas     =  this.refs.canvas
		console.log( $canvas )
	}
	handleStart(){}
	handleMove(){}
	render(){
		return (
			<div className="mu-handlock">
			    <canvas 
			    onTouchStart={this.handleStart.bind(this)} 
			    onTouchMove={this.handleMove.bind(this)}
			    className="mu-handlock-canvas" ref="canvas"></canvas>
			</div>
		);
	}
}

export default Index