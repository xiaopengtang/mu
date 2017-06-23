import React,{Component,PropTypes} from "react" ;

let {"addons":{CSSTransitionGroup},cloneElement}  =  React
class Index extends Component{
	static propTypes    =  {
		"active"    :  PropTypes.bool
		,"zIndex"   :  PropTypes.number
		,"transitionSetting" :  PropTypes.object  
	} ;
	static defaultProps = {
		"active"    :  true
		,"zIndex"   :  100
		,"transitionSetting"  :  {
			"transitionName"  :  "mu-fadein"
			,"className"      :  "mu-back-body"
		}
	} ;
	constructor( props ){
		super( props )
	}
	render(){
		let {active,zIndex,transitionSetting,...other}   
		=  this.props ;
		let style    =  {}
		let {...setting}   =  transitionSetting || {}
		zIndex && active && (style = {zIndex}) ;
		return (
			<div 
			{...other} 
			style={style} 
			className={`mu-back${active?" active":""}`}>
			    <CSSTransitionGroup {...setting} >
			    	{active?this.props.children:null}
			    </CSSTransitionGroup>
		    </div>)
	}
}

export default Index ;