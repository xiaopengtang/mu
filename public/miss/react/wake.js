import $components from "./components/entry" ;
import $plugins from "./plugins/entry" ;
import DOM from "react-dom" ;
import React from "react"
import miss from "miss" ;
const {_}    =  miss ;
let {Component,PropTypes,cloneElement,"addons":{CSSTransitionGroup}}   =  React

class Wake extends Component{
	static propTypes    =  {
		"transitionName":  PropTypes.string
		,"active"       :  PropTypes.boolean
	} ;
	static defaultProps =  {
		"active"        :  false
		,"transitionName"  :  "mu-fade-in"
	} ;
	state               =  {
		"active"        :  false
	};
	constructor( props ){
		super( props )
	}
	componentWillReceiveProps( props ){
		let {active}    =  props ;
		this.setState({active})
	}
	renderChild(){
		let {transitionName,children,...other}  =  this.props ; 
		return cloneElement( children , {...other} ) ;
	}
	render(){
		let {transitionName,active,...other}  =  this.props ; 
		return (
			<CSSTransitionGroup transitionName={transitionName}>{this.state.active?this.renderChild():null}</CSSTransitionGroup>
		);
	}
}

class index {
	$body        =  document.createElement("div") ;
	static getNode(node){
		if( typeof node == "object" )
			return node
		else if(typeof node === "string"){
			let reg       =  new RegExp("^(plugins|components):([A-z]+)$");
			let status    =  reg.test(node)
			if(!status)
				return _.warn("无法识别handle指令："+node)
			let type      =  RegExp.$1 ;
			let $group    =  type === "plugins"?$plugins:$components
			let componentName   =  RegExp.$2 ;
			return $group[componentName]
		}else
		    return ;
	}
	constructor(n){
		let vnode         =  index.getNode(n)
		if(!vnode)
			return ;
		this.vnode        =  vnode ;
		let Vnode         =  vnode
		document.body.appendChild(this.$body)
		DOM.render( <Wake><Vnode/></Wake>, this.$body )
	}
	render(props){
		let Vnode         =  this.vnode
		let {...other}    =  props

		return DOM.render( <Wake {...other}><Vnode/></Wake>, this.$body )
	}
}

export default cf=>{
	return new index( cf ) ;
}