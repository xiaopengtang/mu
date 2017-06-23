<template>
	<div :class="{'mu-modal':true,'active':isShow}">
		<div class="mu-modal-back"></div>
		<div class="mu-modal-body">
		<transition name="mu-fadein">
		    <div class="mu-modal-body-container" v-if="isShow">
		    	<slot></slot>
		    </div>
		</transition>
		</div>
	</div>
</template>

<script>
	export default {
		props     :  {
			"show"   :  Boolean
		}
		,"name"   :  "mu-modal"
		,data(){
			let className       =  "mu-modal"
			// console.log( this.show )
			return {
				"isShow"         :  !!this.show
			};
		}
		,watch  :  {
		}
		,computed :  {
			isShow(){
				return this.show
			}
		}
	}
</script>