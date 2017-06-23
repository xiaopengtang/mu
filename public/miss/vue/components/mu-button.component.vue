<template>
	<button class="mu-button" :class="className" @click.stop="handleClick">
		<i :class="iconLeft" v-if="iconLeft"></i>
		<span>
			<slot></slot>
		</span>
		<i :class="iconRight" v-if="iconRight"></i>
	</button>
</template>
<script>
	export default {
		name     :  "mu-button"
		,props   :  {
			"class"  :  String
			// ,"icon"  :  String
			,"click" :  Function
			,"icon-left"  :  Boolean
			,"icon-right" :  Boolean
		}
		,data(){
			return {
				"className"   :  this.class
				,"iconLeft"   :  this["icon-left"]
				,"iconRight"  :  this["icon-right"]
			}
		}
		,methods   :  {
			handleClick(e){
				/*this.$notify({
					"title"   :  "title"
					,"message":  "测试"
				}) */
				this.$emit("click",e)
			}
		}
	}
</script>