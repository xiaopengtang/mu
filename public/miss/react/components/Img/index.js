import React , {Component,PropTypes} from "react" ;
import miss from "miss"
let {_}          =  miss
class Index extends Component{
	static propTypes     =  {
		"load"      :  PropTypes.function
		,"onLoad"   :  PropTypes.function
		,"onError"  :  PropTypes.function
	} ;
	static load     =  function(src,fn){
		let $i      =  new Image 
		$i.src      =  src 
		$i.onload   =  function(){
			fn.call(true,"success")
		}
		$i.onerror  =  function(){
			fn.call(true,"error")
		}
	}
	constructor( props ){
		super( props )
	}
	render(){
		let {load,onLoad,onError,...other}
		=    this.props
		let {src}      =  {...other}
		Index.load(src,(status)=>{
			let $img   =  this.refs.img
			_.isFunction( load ) && load.call($img,status)
			status === "error" && _.isFunction( onError ) && onError.call($img,status)||
			_.isFunction(onLoad) &&onLoad.call($img,status) ;
		})
		return (
			<img ref="img" {...other} />
		);
	}
}

export default Index