<template>
	<div class="mu-modal-body">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name   :  "mu-modal-body"
		,data(){
			return {}
		}
		,mounted(){
			// console.log( this.$slots.default )
		}
	}
</script>