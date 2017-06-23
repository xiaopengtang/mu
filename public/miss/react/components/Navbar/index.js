import React from "react" ;
import $ from "../../handle" ;

const {Component}    =  React ;

class Index extends Component{
	static defaultProps   =  {
		"active"      :  false
		,"rightIcon"  :  "bars" 
		,"rightIconCallback"  :  null
	} ;
	state         =  {
		"active"  :  true
	};
	$canvas       =  $("components:Offcanvas") ;
	constructor(props){
		super( props )
	}
	componentDidMount(){
	}
	handleBack(){
		let status   =  typeof this.props.handleBack === "function"
		if(status){
			return this.props.handleBack() ;
		}
		history.back() ;
	}
	handleBar(e){ 
		const className    =  e.currentTarget.className
		typeof this.props.rightIconCallback == "function"
		? this.props.rightIconCallback(e)
		: className !== "mu-icon-bars" ? null :this.$canvas.render( {"active":true,"children":(this.props.leftMenu)} )
	}
	render(){

		return (
			<div className="mu-navbar">
			    <i className="mu-icon-chevron-left" onClick={this.handleBack.bind(this)}></i>
			    <h2>{this.props.title}</h2>
			    <i className={'mu-icon-'+this.props.rightIcon} onClick={this.handleBar.bind(this)}>{this.props.rightIconText}</i>
			</div>
		);
	}
}

export default Index ;