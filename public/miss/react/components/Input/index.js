import  React,{Component,PropTypes} from "react" ;

class Index extends Component{
	static defaultProps   =  {
		"type"       :  "text"
		,"leftIcon"  :  null
		,"rightIcon" :  null
	};
	constructor( props ){
		super( props )
	}
	render(){
		let {left,right,className,...other} =  this.props ;
		return (
			<div className={`mu-input ${className?className:""}`}>
			    {left?(<div className="mu-input-left">{left}</div>):null}
			    <div className="mu-input-body"><input {...other} /></div>
			    {right?(<div className="mu-input-right">{right}</div>):null}
			</div>
		);
	}
}

export default Index ;