<template>
	<div class="mu-plugin-search">
		<mu-select class="mu-plugin-search-label"></mu-select>	
	</div>
</template>
<script>
    import $pane from "./Section/keywords.pane.vue" 
	export default {
		name       :  "mu-plugin-search"
		,props     :  {
			"type-label-list"  :  Array
			,"keywords-pane-list"  :  Array
			,"keywords"        :  Array
			,"search"          :  Function
		}
		,data(){
			return {}
		}
	}
</script>