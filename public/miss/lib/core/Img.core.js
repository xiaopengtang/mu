import Nodes from "./Nodes.core"
import _ from "./Common.core" ;
class Img extends Nodes{
	$status       =  "" ;
	static load   =  function(src,fn){
		let $i    =  new Image ;
		$i.onload =  function(){
			fn.call(true,"success")
		}
		$i.onerror=  function(){
			fn.call(true,"error")
		}
	} ;
	constructor( props ){
		super() ;
		this.$props      =  props 
		this.$nodeName   =  "img"
		let {src,onLoad,onError,load}        =  props
		Img.load( ( status )=>{
			this.$status     =  status
			_.isFunction( load ) && load.call(true) ;
			status === "success" && _.isFunction( onLoad ) && onLoad.call(true)
			|| _.isFunction( onError ) && onError.call(true)
		} )
	}
}



export default Img