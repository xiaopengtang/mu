import React,{Component,PropTypes}  from "react" ;
import miss from "miss" ;
let {"Selector":$,_,"Number":$number}     =  miss ;

class Index extends Component{
	static propTypes    =  {
		"width"    :  PropTypes.number
		,"src"     :  PropTypes.string //要加载的图片地址
	};
	constructor( props ){
		super( props )
	}
	componentDidMount(){
		let src        =  this.props.src ;
		//load static resource -- for image
		(function(src,fn){
			if(!src)
				return fn.call(this,0)
			let $i     =  new Image ;
			$i.src     =  src
			$i.onload  =  function(){
				let dom        =  this.refs.item
				let width      =  $(dom).width()
				fn.call(this,width)
			}.bind(this)
			$i.onerror =  function(){
				return fn.call(this,0)
			}.bind(this)
		}.bind(this))(src,function(width){
			let dom    =  this.refs.item
			width      =  width !== 0 ? width : $(dom).width() ;
			_.isFunction(this.props.mount)
		    &&this.props.mount( $number.div(width,REM) );
		});
		
	}
	render(){
		let style      =  {}
		let {children,width,...props}
		=  this.props    
		width !== 0 && (style.width = (width+"rem"));
		return (
			<div 
			{...props}
			style={style} 
			className="mu-slide-item" 
			ref="item">{children}</div>
		);
	}
}

export default Index ;