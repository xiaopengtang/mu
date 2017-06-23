import ModalNative from "./mu-native.component.vue" ;
import ModalTitle from "./mu-modal-title.component.vue" ;
import ModalBody from "./mu-modal-body.component.vue" ;
import Vue from "vue" ;
import miss from "miss" 
const {_}     =  miss ;
const Modal          =  {
	props     :  {
		"title"   :  String
		,"body"   :  String
	}
	,data(){
		return {
			"show"   :  false
		};
	}
	,render(h){
		let title       =  this.title
		let body        =  this.body
		return (
			<ModalNative show="show">
				<ModalTitle v-if="title">{title}</ModalTitle>
				<ModalBody>{body}</ModalBody>
			</ModalNative>
		);
	}
}

const ModalInit       =  Vue.extend( Modal )

Vue.prototype.$modal  =  (opt)=>{
	const $intance        =  new ModalInit({
		"el"            :  document.createElement("div")
	})
	if( _.type(opt) != "object" )
		return ;
	_.each( opt , (v,props)=>{
		$intance[props]   =  v ;
	} )
	$intance.vm       =  $intance.$mount() ;
	document.body.appendChild($intance.$el)
	Vue.nextTick( ()=>{
		$intance.vm.show   =  true
	} )
	return $intance
}