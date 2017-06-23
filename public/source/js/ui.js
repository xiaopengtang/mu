import mu from "miss.react" ;
import React,{Component} from "react" ;
import {Router,Route,hashHistory}  from "react-router" ;
import $ from "jquery" ;
import pages from "./UI/index" ;
import miss  from "miss"
import DOM from "react-dom" ;

const {_}      =  miss ;
const $body    =  document.querySelector(".xp-page") ;
let _MENU_     =  null ;
try{
	_MENU_     =  JSON.parse($.ajax({"url":"/menu","async":false}).responseText)["data"] ;
}catch(e){
	_MENU_     =  null
}

class Ctrl extends Component{
	constructor( props ){
		super( props )
	}
	render(){
		return (
			<Router history={hashHistory} path="/">
			    <Route path="/" component={pages.Index} />
			    <Route data={_MENU_.menu} path="/components" component={pages.Components} />
			    <Route path="/actionsheet" component={pages.Actionsheet} />
			    <Route path="/alert" component={pages.Alert} />
			    <Route path="/collapse" component={pages.Collapse} />
			    <Route path="/datepicker" component={pages.Datepicker} />
			    <Route path="/tabs" component={pages.Tabs} />
			    <Route path="/scrollbar" component={pages.Scrollbar} />
			    <Route path="/select" component={pages.Select} />
			</Router>
		);
	}
}
DOM.render(<Ctrl /> , $body ) ;
