import React , {Component} from "react" ;
import DOM  from "react-dom" ;
import addons,{classSet} from "react-addons" ;
import style from "./modal.component.css" ;

//背景
class BackGround extends Component{
	constructor( props ){
		super( props )
	}
	render(){
		return (
			<div onClick={this.props.event} className={style.background}>{this.props.children}</div>
		);
	}
}
//基础
class Base extends Component{
	constructor( props ){
		super( props )
		this.close      =  this.close.bind(this)
		this.setState( { "visible" :  this.props.visible } )
		let classes          =  {}
		classes[style['dialog-modal']]       =  true
		classes[style['active']]             =  true//this.props.visible
		this.classes         =  classSet( classes )
		console.log( this.state )
		// this.state           =  this.state || {}
	}
	close(){ 
		let $this            =  this.refs["body"]
		let classes          =  {}
		classes[style['dialog-modal']]       =  true
		classes[style['active']]             =  false
		$this.className      =  classSet( classes )
	}
	componentDidMount(){
		console.log( this.props )  
	}
	render(){
		let classes         =  this.props.visible?this.classes:style["dialog-modal"]
		console.log( classes )
		return (
			<div className={classes} ref="body" >
				<BackGround />
				<div onClick={this.close} className={style.container}>{this.props.children}</div>
			</div>
		);
	}
}
//弹窗
class Modal extends Component{
	constructor( props ){
		super( props )
		this.setState( { "visible" : this.props.visible } )
		this.close   =  this.close.bind(this)
		this.show    =  this.show.bind(this)
	}

	close(e){
		this.setState({"visible":null})
	}
	show(){}

	render(){
		this.state          =  this.state || {}
		return (
			<Base visible={this.props.visible}>
				<div className={style.modal}>
				    <div className={style.header}>
				        <h1>{this.props.title}</h1>
				        <i onClick={this.close}></i>
				    </div>
				    <div className={style.body}>
				        {this.props.children}
				    </div>
				    <div className={style.footer}>
				    {this.props.footer || [{
				    	"text"      :  "取消"
				    	,"event"    :  this.close 
				    },
				    {
				    	"text"      :  "确定"
				    	,"event"    :  this.show 
				    }
				    ].map( (v)=>{
						return (
							<button onClick={v.event}>{v.text}</button>
						);
					} ) }
				    </div>
				</div>
			</Base>
		) ;
	}
}

export default Modal ;