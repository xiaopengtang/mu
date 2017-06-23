import React from "react" ;
import Modal from "../../components/modal.component"
import $ from "jquery"

class Menu extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		this.props.data       =  this.props.data || []
		return (
			<div className="xp-left-menu">
			    <div className="xp-left-menu-header"></div>
			    <ul className="xp-left-menu-ul">
			    {this.props.data.map( ( d )=>{
			    	return (
			    		<li onClick={this.props.event}><a href="javascript:void(0);">{d.title}</a></li>
			    	) ;
			    } )}
			    </ul>
			</div>
		);
	}
}
class Content extends React.Component{
	constructor( props ){
		super(props)
	}
	render(){
		return (
			<div className="xp-page-body"></div>
		);
	}
}
class Index extends React.Component{
	constructor(props){
		super( props )
		this.getStateData() ;
		this.menuClick  =  this.menuClick.bind(this)
	}
	menuClick(){
		this.setState({"showModal":true})
	}
	getStateData(){
		var _           =  this
		$.ajax({
			"url"       :  "/api"
			,"success"  :  ( json )=>{
				if( json.success && json.data ){
					_.setState( $.extend( true , json.data , { "showModal" :  false } ) )
				}
			}
		})
	}
	render(){
		this.state        =  this.state || {}
		// console.log( this.state.showModal )
		return (
			<div className="ms-page">
			    <div className="xp-body">
				    <Menu data={this.state.menu} event={this.menuClick}/>
				    <Content />
			    </div>
			    <div className="xp-footer" style={{"display":"none"}}>
			    </div>
			    <Modal visible={this.state.showModal} title="测试">
			    </Modal>
			</div>
		);
	}
}
export default Index ;