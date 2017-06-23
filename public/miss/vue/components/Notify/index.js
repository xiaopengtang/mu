import notify from "./notify.vue" ;
import Vue from "vue" ;
import _ from "../../utils/fn.handle" ;

let $parentNode           =  document.createElement("div")
let existParent           =  document.querySelectorAll(".mu-notify-group")

if( existParent.length < 1 ){
	$parentNode.className     =  "mu-notify-group" ;
	document.body.appendChild( $parentNode )
}else
    $parentNode           =  document.querySelector(".mu-notify-group")



const $notifyConstructor  =  Vue.extend( notify )



Vue.prototype.$notify     =  function(opt){
	const $notify             =  new $notifyConstructor({el:document.createElement("div")})
	if( _.type( opt ) != "object" ){
		return _.warn("error")
	}
	_.each( opt , (v,props)=>{
		$notify[props]    =  v ;     
	} )
	let newNotify         =  $notify.$mount()

	$parentNode.appendChild( $notify.$el )
	newNotify.active      =  true
}

export default notify ;