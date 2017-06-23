<template>
	<div class="mu-checkbox" >
	    
		<label>
		    <div class="mu-checkbox-label" v-if="position == 'left'">
		    	<slot></slot>
		    </div>
			<div @click="handleCheck" class="mu-checkbox-body" :class="{'active':value}"></div>
			<div class="mu-checkbox-label" v-if="position == 'right'">
		    	<slot></slot>
		    </div>
		</label>
		<input type="checkbox" :name="name" :checked="value" class="mu-css-hide" >
		
	</div>
</template>
<script>
	export default {
		"name"     :  "mu-checkbox"
		,"props"   :  {
			"name" :  String
			,"checked"  :  Boolean
			,"disabled" :  Boolean
			,"position" :  {
				"type"      :  String
				,"default"  :  "right"
			}
		}
		,data(){
			// alert( eval( "(" + this.checked + ")" ) )
			return {
				value   :  eval( "(" + this.checked + ")" )
			}
		}
		,methods   :  {
			handleCheck(){
				this.value     =  !this.value	
			}
		}
	}
</script>