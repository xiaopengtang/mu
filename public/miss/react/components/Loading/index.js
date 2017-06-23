import React,{Component} from "react" ;


class Index extends Component{
	constructor( props ){
		super( props )
	}
	render(){
		return (
			this.props.active?(<div className="mu-loading">
			    <div className="mu-loading-body">
			        <div className="mu-loading-scale" data-sec="1.5s"></div>
			        <div className="mu-loading-scale other" data-sec="3s" ></div>
			    </div>
			</div>):null
		);
	}
}

export default Index ;