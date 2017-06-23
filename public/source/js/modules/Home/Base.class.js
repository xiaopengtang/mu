import React  from "react" ;

class Base extends React.Component{
	constructor( props ){
		super( props ) ;
	}

	render(){
		return (
			<div className="xp-home">{this.props.children}</div>
		);
	}
}
export default Base ;