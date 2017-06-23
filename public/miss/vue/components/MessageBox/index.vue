<template>
    <modal-native :show="show" :class="className">
        <modal-title :class="position">提示</modal-title>
        <modal-body>
        	<div class="mu-messagebox">
        	    <alert v-if="type == 'alert'" @callback="handleAlertCallBack">{{message}}</alert>
			</div>
        </modal-body>
	</modal-native>
</template>
<script>
	import ModalNative from "../Modal/mu-native.component.vue" ;
	import ModalTitle from "../Modal/mu-modal-title.component.vue" ;
	import ModalBody from "../Modal/mu-modal-body.component.vue" ;
	import Alert from "./Alert.vue"
	export default {
		name    :  "mu-message-box"
		// ,mixins :  [Alert]
	    ,props  :  {
	    	"$type"   :  String
	    	,"message":  String
	    }
		,data(){
			return {
				"show"  :  false
				,"position"  :  "center no-border"
				,"className"  :  ""//"back"
				,"type"  :  this.$type
			}
		}
		,methods    :  {
			handleAlertCallBack(){
				alert()
			}
		}
		,computed   :  {
			type(){
				return this.$type
			}
		}
		,watch(){
			// show(){}
		}
		,created(){
		}
		,components   :  {
			ModalNative,ModalTitle,ModalBody,Alert
		}
	}
</script>