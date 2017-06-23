<template>
	<div class="mu-radio">
		<div class="mu-radio-body"></div>
		<input type="radio" :name="name" class="mu-css-hide">
	</div>
</template>
<script>
	export default {
		"name"   :  "mu-radio"
		,props   :  {
			"name"  :  String
		}
		,data(){
			return {}
		}
	}
</script>