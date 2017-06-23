import MessageBox from "./index.vue" ;
import Vue from "vue" ;
import _ from "../../utils/fn.handle" ;
const defailtProps     =  {}

let MessageBoxInit     =  Vue.extend(MessageBox) 
let $intance

$intance           =  new MessageBoxInit({
    "el"    :  document.createElement("div")
})

const appendToBody =  function(){
	document.body.appendChild($intance.$el)
}

Vue.prototype.$msgbox  =  function( opt ){
	if( _.type(opt) != "object" )
		return ;
	_.each( opt , (v,props)=>{
		$intance[props]   =  v ;
	} )
	appendToBody()
	Vue.nextTick( ()=>{
		$intance.show   =  true
	} )
}    

export default MessageBox
