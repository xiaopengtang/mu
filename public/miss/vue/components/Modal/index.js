import Vue from "vue" 
import Modal from "./modal.vue"
import ModalTitle from "./modal-title.vue"
import ModalBody from "./modal-body.vue"
import ModalFooter from "./modal-footer.vue"
import miss from "miss"
const {_}     =    miss
const $modal         =  {
	props      :  {
		/*"title"   :  String
		,"body"   :  String
		,"footer" :  String*/
	}
	,data(){
		return {
			"active"    :  false
			,"title"    :  ""
			,"body"     :  ""
			,"footer"   :  ""
		}
	}
	,render(){ 
		let title      =  this.title
		,   body       =  this.body
		,   footer     =  this.footer
		,   show       =  this.active
		return (
			<Modal show={show}>
				{title?(
					<ModalTitle>{title}</ModalTitle>
				):null}
				<ModalBody v-if="body">{body}</ModalBody>
				{footer?(<ModalFooter v-if="footer">{footer}</ModalFooter>):null}
			</Modal>
		);
	}
}

let $construct      =  Vue.extend($modal)

Vue.prototype.$modal      =  (opt)=>{
	let  $intance =  new $construct({"el":document.createElement("div")})
    $intance.vm     =  $intance.$mount() ;
    _.each( opt , (props,name)=>{
    	$intance.vm[name]    =  props
    } )
    document.body.appendChild( $intance.$el )
    Vue.nextTick( ()=>{
    	$intance.vm.active   =  true
    } )
    return $intance
}