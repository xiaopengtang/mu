<template>
	<div class="editer-body" @keyup.enter.prevent="handlePressEnter" contenteditable="true" @keyup.delete="handleDelContent"></div>
</template>
<script>
	export default {
		data(){
			return {}
		}
		,methods   :  {
			handlePressEnter(){
			}
			,handleDelContent(e){
				// console.log("this is delete")
				this.$emit("del",e)
			}
		}
	}
</script>