<template>
	<div class="mu-modal-title" :class="className">
	    <div class="mu-modal-title-txt">
	    	<slot></slot>
	    </div>
		<i class="mu-icon-close mu-css-i y-center right" @click="handleClose"></i>
	</div>
</template>
<script>
	export default {
		name   :  "mu-modal-title"
		,props :  {
			"class"    :  String
			,"align"  :  String
		}
		,data(){
			return {
				"className"    :  this.class
			}
		}
		,methods   :  {
			handleClose(){
				this.$parent.handleClose();
			}
		}
	}
</script>