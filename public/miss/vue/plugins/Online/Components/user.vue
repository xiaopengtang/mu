<template>
	<div class="online-user" @click="handleWake">
		<div class="online-user-header">
			<img src="//q.qlogo.cn/qqapp/101235792/B704597964F9BD0DB648292D1B09F7E8/100">
		</div>
		<div class="online-user-name">
			<h3 class="online-nickname">小朋友</h3>
			<div class="online-user-sign mu-css-font-break">小朋友爱大朋友小朋友爱大朋友小朋友爱大朋友小朋友爱大朋友小朋友爱大朋友</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {}
		}
		,methods   :  {
			handleWake(e){
				this.$emit("click",e)
			}
		}
	}
</script>