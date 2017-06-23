<template>
	<div class="mu-slider">
		<div class="mu-slider-line">
		    <!-- <mu-tooltip title="50"> -->
		    	<div class="mu-slider-handle mu-effect-card"></div>
		    <!-- </mu-tooltip> -->
		</div>
		<input type="text" class="mu-css-hide" :name="name" :value="progress" />
	</div>
</template>
<script>
    import muTooltip from "./mu-tooltip.component.vue" ;
	export default {
		name   :  "mu-slider"
		,props :  {
			name   :  String
			,value :  Number
		}
		,components   :  {
			"mu-tooltip"   :  muTooltip
		}
		,data(){
			return {
				progress    :  this.value
			}
		}
	}
</script>