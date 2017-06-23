import React,{Component,PropTypes} from "react" ;
import item from "./item" ;

class Index extends Component{
	static Item     =  item ;
	static propTypes=  {
		"line"   :  PropTypes.bool 
	} ;
	static defaultProps  =  {
		"line"   :  false
	} ;
	constructor( props ){
		super( props ) ;
	}
	render(){
		let {line,...other}    =  this.props ;
		return (
			<form {...other} className="mu-form">
			    <div className={`mu-form-body${line?" line":""}`}>
			    {this.props.children}
			    </div>
			</form>
		);
	}
}

export default Index