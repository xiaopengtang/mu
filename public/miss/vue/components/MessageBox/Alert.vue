<template>
	<div class="mu-alert">
		<div class="mu-alert-body">
		    <slot></slot>
		</div>
		<div class="mu-alert-bottom" @click="handleCallBack">
			<h2>确定</h2>
		</div>
	</div>
</template>
<script>
	export default {
		name   :  "mu-alert"
		,props :  {
			"callback"   :  Function
		}
		,data(){
			return {}
		}
		,methods   :  {
			handleCallBack(e){
				this.$emit( "callback" , e )
			}
		}
	}
</script>