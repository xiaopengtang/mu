import React,{Component,PropTypes} from "react" ;

class Index extends Component{
	static propTypes    =  {
		"icon"       :  PropTypes.string
		// ,"title"     :  PropTypes.string
		,"click"     :  PropTypes.function
	};
	constructor(props){
		super( props )
	}
	render(){
		return (
			<div className="mu-icon" onClick={this.props.click}>
			    <h2>{this.props.children}</h2>
			    <i className="mu-icon-chevron-right"></i>
			</div>
		);
	}
}

export default Index