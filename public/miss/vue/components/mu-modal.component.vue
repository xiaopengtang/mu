<template>
    <!-- <div :class="{'mu-modal':true,'active':isShow}">
		<div class="mu-modal-back" v-if="background"></div>
		<div class="mu-modal-body">
		<transition name="mu-fadein">
		    <div class="mu-modal-body-container" v-if="isShow">
		    	<slot></slot>
		    </div>
		</transition>
		</div>
	</div> -->
	<mu-modal-native :show="isShow" :class="className">
		<slot></slot>
	</mu-modal-native>
</template>
<script>
    // import ModalBase from "./Modal/ModalBase.component.vue"
    import ModalNative from "./Modal/mu-native.component.vue"
	export default {
		name   :  "mu-modal"
		,props :  {
			"show"  :  Boolean
			,"background"   :  Boolean
		}
		,data(){
			return {
				isShow   :  this.show
				,className  :  this.background?"back":false
			}
		}
		,components  :  {
			"mu-modal-native"   :  ModalNative
		}
	}
</script>