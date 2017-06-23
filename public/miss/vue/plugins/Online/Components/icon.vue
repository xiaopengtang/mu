<template>
	<div class="online-icon" @click="handleClick">
		<div class="mu-effect-card card-in-top online-icon-body">
			<div class="online-icon-img">
				<img src="//cdn.firstlinkapp.com/upload/2016_6/1465575923433_33812.jpg">
			</div>
			<h2 class="online-icon-title">这是online</h2>
		</div>
		<div class="online-items mu-css-hide" >
			<slot></slot>
		</div>
	</div>
</template>
<script>
	export default{
        props    :  {
        	"click"   :  Function
        }
		,data(){
			return {}
		}
		,methods    :  {
			handleClick(e){
				this.$emit("click",e)
			}
		}
	}
</script>