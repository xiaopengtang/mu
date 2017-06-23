<style lang="less"> 
@import "./slide.component.less" ;
.load-less() ;
</style>

<template>
  <div class="ui-slide">
    <div class="ui-slide-body"></div>
  </div>
</template>

<script>
	export default {
		props : ["data"] 
    ,data(){
      // console.log( this.data )
      return {
        list     :  this.data
      }
    }
	}
</script>