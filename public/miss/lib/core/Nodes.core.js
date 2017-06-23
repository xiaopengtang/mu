import _ from "./Common.core" ;
class Nodes {
	constructor(){}
	render(){
		let nodeName        =  this.$nodeName
		let $new            =  document.createElement(nodeName)
		let props           =  this.$props || {}
		let {onLoad,onError,...p}     =  props ;
		_.each( {...p} , (v,k)=>{
			$new[k]    =  v ;
		} )
		return $new
	}
}

export default Nodes