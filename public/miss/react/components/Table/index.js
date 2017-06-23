import React,{Component} from "react" ;

class Index extends Component{
	constructor(props){
		super( props )
	}
	render(){
		let {className,children,...other} = this.props ;
		return (
			<table 
			className={`mu-table ${className?className:""}`}
			{...other}
			>{children}</table>
		);
	}
}

export default Index ;