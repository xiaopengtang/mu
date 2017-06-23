<template>
	<div class="mu-switch" :class="{'active':value}" @click="handleCheck">
		<input type="checkbox" :style="{'display':'none'}" :name="name" :checked="value">
		<div class="mu-switch-body">
			<span class="mu-switch-ctrl"></span>
		</div>
	</div>
</template>
<script>
	export default {
		name    :  "mu-switch"
		,props  :  {
			class   :  String 
			,name   :  String
			,id     :  String
			,checked:  Boolean
		}
		,data(){
			return {
				value   :  this.checked
			}
		}
		,methods   :  {
			handleCheck(){
				this.value    =  !this.value
			}
		}
	}
</script>