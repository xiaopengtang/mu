<style lang="less"> 
@import "./sideMenu.component.less" ;
.load-less(side-menu) ;
</style>

<template>
  <div class="ui-side-menu" :class="{'ui-side-left':isLeft}">
  </div>
</template>

<script>
	export default {
		props : ["data","position"] 
    ,data(){
      let   position        =  (this.position || "left").toLowerCase() ;
      return {
        list     :  this.data || {}
        ,isLeft  :  position == "left"
      }
    }
	}
</script>