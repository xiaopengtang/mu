<template>
	<div class="mu-modal-container">
	    <div class="mu-body">
	    	<slot></slot>
	    </div>
	    <div class="mu-modal-bottom"></div>
	</div>
</template>
<script>
	export default {
		name   :  "mu-modal-body"
		,data(){
			return {}
		}
	}
</script>