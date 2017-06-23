import Tip from "./Tip.vue" ;
import Vue from "vue" ;
import _ from "../../utils/fn.handle" ;

let TipInit     =  Vue.extend( Tip )

let $intance           =  new TipInit({
    "el"    :  document.createElement("div")
})

const appendToBody =  function(){
	document.body.appendChild($intance.$el)
}

Vue.prototype.$note  =  function( opt ){
	if( _.type(opt) != "object" )
		return ;
	_.each( opt , (v,props)=>{
		$intance[props]   =  v ;
	} )
	$intance.vm       =  $intance.$mount() ;
	appendToBody()
	$intance.vm.active  =  true
}    

export default Tip
