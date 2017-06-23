import React from "react" ;
import DOM   from "react-dom"
import {Router , Route , hashHistory , IndexRoute } from "react-router" ;
import HomeIndex from "./modules/Home/Index.class"
import HomeSlide from "./modules/Home/Slide.class"
import HomeBase from "./modules/Home/Base.class"
// import Miss  from "miss" 
// console.log( Miss )
/*class Home extends React.Component{
	constructor( props ){
		super( props ) ;
	}
	render(){
		return (
			<div className="ms-home">
			    <div className="ms-header"></div>
			    <div className="ms-page-group">{this.props.children}</div>
			</div>
		);
	}
}

class Index extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="ms-page">hello world</div>
		);
	}
}*/
// console.log( DOM ) 
DOM.render((
	<Router history={hashHistory}>
	    <Route path="/" component={HomeBase}>
	        <IndexRoute component={HomeIndex} />
	        <Route path="/slide" component={HomeSlide} />
	    </Route>
	</Router>
), document.body );
