import React,{Component,PropTypes} from "react" ;

class Index extends Component{
	static propTypes=  {
		"label"   :  PropTypes.string 
		,"width"  :  PropTypes.string
	} ;
	static defaultProps  =  {
		"label"   :  null
		,"width"  :  null
	} ;
	constructor( props ){
		super( props )
	}
	render(){
		let {label,width,className,...other}  =  this.props ;
		return (
			<div className="mu-form-item">
			   {label?(<div style={width?{width}:null} className="mu-form-item-label">{label}</div>):null}
			   <div 
			   {...other} 
			   className={`mu-form-item-body ${className?className:""}`}>
			   {this.props.children}
			   </div>
			</div>
		);
	}
}

export default Index