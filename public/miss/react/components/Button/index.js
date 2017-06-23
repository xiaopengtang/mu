import React,{Component,PropTypes} from "react" ;

class Index extends Component{
	static defaultProps=  {
		"leftIcon"     :  null
		,"rightIcon"   :  null
		// ,"type"        :  "primary"
	} ;
	static propTypes   =  {
		"leftIcon"     :  PropTypes.element
		,"rightIcon"   :  PropTypes.element
		// ,"type"        :  PropTypes.string
	} ;
	constructor( props ){
		super( props )
	}
	render(){
		let {leftIcon,rightIcon,...other}  = this.props ;
		return (
			<div className="mu-button text-align" {...other}>
			    {leftIcon?(<div className="inline-block">{leftIcon}</div>):null}
			    <div className="inline-block">{this.props.children}</div>
			    {rightIcon?(<div className="inline-block">{rightIcon}</div>):null}
			</div>
		);
	}
}
export default Index ;