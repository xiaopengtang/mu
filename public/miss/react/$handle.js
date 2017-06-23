import $components from "./components/entry" ;
import $plugins from "./plugins/entry" ;
import DOM from "react-dom" ;
import React,{Component} from "react" ;
let {"addons":{CSSTransitionGroup},cloneElement}  =  React
class Ctrl extends Component{
	state     =  {
		"mu_show_bool"  :  true
	} ;
	constructor( props ){
		super( props )
		this.state.mu_show_bool   =  this.props.mu_show_bool
	}
	componentWillReceiveProps(props){
		let {mu_show_bool}  =  props ;
		if(mu_show_bool === void 0 ){
			return ;
		}
		this.setState({mu_show_bool})
	}
	render(){
		let {children,transitionName}  =  this.props ;

		return transitionName
		    ?(
		    	<CSSTransitionGroup transitionName={transitionName}>{this.state.mu_show_bool?children:null}</CSSTransitionGroup>
		    )
		    :children
		
	}
}
class handle {
	$body        =  document.createElement("div") ;
	static getNode(node){
		if( typeof node == "object" || typeof node == "function" )
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
	constructor( config ){
		let {"key":n}     =  config || {}
		let vnode         =  handle.getNode(n)
		if(!vnode)
			return ;
		this.$vnode       =  vnode ;
		this.$config      =  config || {}
		document.body.appendChild(this.$body)
		this.hide() ;
	}
	action(mu_show_bool){
		let {transitionName,construct,change_props_status} =  this.$config
		let {"$vnode":Vnode}    =  this
		change_props_status    =  change_props_status || "active"
		let node          =  typeof construct == "function" 
		?construct( Vnode ) : <Vnode /> ;
		if( !transitionName ){
			node.props[change_props_status]   =  mu_show_bool
		}

		node.props.$hide   =  this.hide.bind(this)
		node.props.$show   =  this.hide.bind(this)
		DOM.render( <Ctrl transitionName={transitionName} mu_show_bool={mu_show_bool}>{node}</Ctrl> , this.$body ) ;
	}
	show(){
		return this.action(true)
	}
	hide(){
		return this.action(false)
	}
}

export default (opt)=>{
	return new handle(opt);
} ;