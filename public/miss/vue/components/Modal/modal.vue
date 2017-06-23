<template>
    <transition name="mu-scale-in">
		<div class="mu-modal" v-if="active">
			<div class="mu-modal-container mu-effect-card card-in-top">
			    <slot></slot>
			</div>
		</div>
	</transition>
</template>
<script>
	export default {
		name    :  "mu-modal"
		,props  :  {
			"show"   :  Boolean
		}
		,data(){
			return {
				"active"   :  false
				,"userSet" :  false
			}
		}
		
		,computed   :  {
			userSet(){
				return this.show
			}
		}
		,watch     :  {
			userSet(newValue,olValue){

				this.active   =  newValue
			}
		}
	}
</script>