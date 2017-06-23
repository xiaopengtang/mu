<template>
    <transition :name="animation">
		<div class="mu-tabs-container" 
		v-if="active"
		v-show="active"
		>
			<slot></slot>
		</div>
	</transition>
</template>
<script>
	export default {
		name    :  "mu-tab-pane"
		,props  :  {
			label   :  String
			,active :  Boolean
			,"animation"   :  {
				type  :  String
				,default  : 'mu-fadein-right' 
			}
		}
		,data(){
			return {
				index   :  null
			}
		}
		,mounted(){
			this.index  =  this.$parent.addPane(this)
		}
		,computed   :  {
			active(){
				return this.$parent.index == this.index
			}
		}
	}
</script>