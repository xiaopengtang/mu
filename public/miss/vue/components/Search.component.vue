<style lang="less">
	// @import "../../less/miss.web.entry.less" ;
	// .ui-search();
</style>
<template>
  <div class="mu-search">
  	<div class="mu-search-body" @click.self="handleClick">
  	</div>
  </div>
</template>

<script>
	export default {
		"name"  : "mu-search" ,
		"props" : ["data","position"] 
	    ,data(){
	      let   position        =  (this.position || "left").toLowerCase() ;
	      return {
	        list     :  this.data || {}
	        ,isLeft  :  position == "left"
	      }
	    }
	    ,"methods" :  {
	    	handleClick(){
	    		console.log( arguments )
	    	}
	    }
	}
</script>