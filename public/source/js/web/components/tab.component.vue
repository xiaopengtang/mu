<style lang="less">
.ui-tab{
	.ui-tab-body{
		ul{
			list-style: none;
		}
	}
	.ui-tab-ctrl{}
}
</style>

<template>
    <div class="ui-tab">
        <div class="ui-tab-ctrl">
        	<ul>
        		<li></li>
        	</ul>
        </div>
  	    <div class="ui-tab-body">
  	    	<ul>
  	    		<li></li>
  	    	</ul>
  	    </div>
    </div>
</template>

<script>
	export default {
		props : ["data","ctrl"] 
	}
</script>