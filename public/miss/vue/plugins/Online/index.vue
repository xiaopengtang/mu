<template>
	<div class="mu-plugins online">
	    <transition name="mu-fadein-btm">
			<icon v-if="!status" @click="handleWake">
				<icon-item>测试</icon-item>
			</icon>
			<line-body v-if="status == 'line-body'" @close="handleClose"></line-body>
		</transition>
	</div>
</template>
<script>
    import Components from "./Components/index"
	export default {
		name    :  "mu-plugin-online"
		,props  :  {
			config   :  Object
		}
		,components   :  Components
		,data(){
			return {
				status   :  /*"line-body"//*/null  //状态
			}
		}
		,methods   :  {
			handleWake(){
				this.status       =  "line-body"
			}
			,handleClose(){
				this.status       =  null
			}
		}
	}
</script>