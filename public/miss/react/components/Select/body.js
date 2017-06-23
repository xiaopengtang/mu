import React,{Component} from "react" ;

class Index extends Component{
	constructor( props ){
		super(props)
	}
	render(){
		return (
			<div className="mu-select">
			    <div className="mu-select-ctrl">
			        <div className="mu-select-ctrl-line">取消</div>
			        <div className="mu-select-ctrl-line">确定</div>
			    </div>
			</div>
		);
	}
}

export default Index