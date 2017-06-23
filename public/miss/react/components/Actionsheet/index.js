import React,{Component,PropTypes,createElement} from "react" ;
import Back from "../Back/index" ;
import miss from "miss" ;
const {_}     =  miss ;
let {"addons":{CSSTransitionGroup},cloneElement}  =  React
class Index extends Component{
	state     =  {
		"active"  :  false
	} ;
	static propTypes  =  {
		"active"  :  PropTypes.bool
		,"body"   :  PropTypes.array
	} ;
	static defaultProps = {} ;
	constructor( props ){
		super( props ) ;
	}
	componentWillReceiveProps( props ){
		let {active}   =  props 
		if( active === null ){
			return ;
		}
		this.setState({active})
	}
	componentWillMount(){
		let {active}   =  this.props 
		this.setState({active})
	}
	handleClose(e){
		let active    =  false ;
		let {onClick} =  this.props ;
		let className =  e.currentTarget.className ;  
		className.replace("mu-actionsheet-btm","") === className
		&&  _.isFunction(onClick) && onClick(e) ;
		this.setState({active})
	}
	handleBody(e){
		e.stopPropagation() ;
		e.preventDefault() ;
	}
	renderChild(){
		const {children,body}   =  this.props ;
		if( children ){
			return children ;
		}
		
		const bodyIsArray   =  Array.isArray(body)
		if( !bodyIsArray && !_.isFunction( body ) ){
			return null ;
		}
		const ret     =  _.isFunction(body)?body( createElement("li") ):body
		if(!Array.isArray(ret) ){
			return null ;
		}
		return (
			<ul>
				{bodyIsArray?ret.map((cf)=>{
					let {text,...other}  =  cf ;
					return (<li {...other}>{text}</li>);
				}):body}
				<li className="mu-actionsheet-btm" onClick={this.handleClose.bind(this)}>取消</li>
			</ul>
		);
	}
	render(){
		let {"active":_active,body,children,onClick,...other} = this.props ;
		let {active}   =  this.state ;
		return (
			<Back 
			active={active} 
			onClick={this.handleClose.bind(this)} 
			{...other} 
			transitionSetting={{"transitionName":'mu-fade-bottom'}}
			>
	        	<div 
	        	onClick={this.handleBody.bind(this)} 
	        	className="mu-actionsheet">{this.renderChild()}</div>
			</Back>
		);
	}
}

export default Index ;