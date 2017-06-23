import $components from "./components/entry" ;
import $plugins from "./plugins/entry" ;
import DOM from "react-dom" ;
import React from "react"
import miss from "miss" ;
const {_}    =  miss ;
let {Component,"addons":{CSSTransitionGroup}}   =  React
class Handle {
	$props       =  {"transitionName":"mu-fade-in"} ;
	$body        =  document.createElement("div") ;
	$node        =  "div" ;
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
		this.$node      =  Handle.getNode(n)
		if(!this.$node)
			return ;
		document.body.appendChild(this.$body)
		DOM.render( <CSSTransitionGroup component="div"></CSSTransitionGroup>, this.$body ) ;
	}
	props( props ){
		this.$props     =  props
		return this ;
	}
	render(props){
		props && (this.$props     =  _.extend(true,this.$props,props) ) ;
		let {transitionName,mu_show,...other}    =  this.$props
		transitionName  =  transitionName || "mu-fade-in"
		let $node       =  this.$node
		mu_show         =  mu_show === void 0 ? true : false
		DOM.render( 
			<CSSTransitionGroup component="div" transitionName={transitionName}>
			    {mu_show?(<$node {...other} />):null}
			</CSSTransitionGroup>, this.$body
		 ) ;
	}
}

export default (node)=>{
	return new Handle(node);
}