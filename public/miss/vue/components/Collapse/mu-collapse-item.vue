<template>
	<div :class="{'mu-collapse-item':true,'active':show}">
	    <div class="mu-collapse-title" @click="handleShow">
	        <template v-if="defaults">
	        	<i class="mu-icon-chevron-right"></i>
	    	    <h2>{{label}}</h2>
	        </template>
	        <template v-else>{{label}}</template>
	    </div>
	    <transition :name="animation">
	    	<div class="mu-collapse-item-body" v-if="show">
		    	<slot></slot>
		    </div>
	    </transition>
	</div>
</template>
<script>
	export default {
		name     :  "mu-collapse-item"
		,props   :  {
			"label"   :  [Object,String]
			,"animation"   :  {
				type  :  String
				,default  : 'mu-fadein-left' 
			}
			,"defaults":  {
				"type"  :  Boolean
				,"default"  :  true
			}
		}
		,data(){
			return {
				"show"   :  false 
				,"index" :  0
			}
		}
		,mounted(){
			this.index     =  this.$parent.addItem(this)
		}
		,computed  :  {
			show(){
				return this.$parent.index === this.index
			}
		}
		,methods   :  {
			handleShow(){
				this.$parent.handleItem(!this.show?this.index:null)
			}
		}
	}
</script>
