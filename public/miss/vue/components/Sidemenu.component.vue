<template>
	<div class="mu-sidemenu" @click="handleClick" :class="{'left':isLeft}">
		<div class="mu-sidemenu-body">
			<div class="mu-sidemenu-body-menu"></div>
		</div>
	</div>
</template>
<script>
	export default {
		name  :  "mu-sidemenu" ,
		props : {
			"side"   :  {
				type       :  String
				,required  :  true
			}
		},
		data(){

			let isLeft       =  this.side && this.side.toLowerCase() === "left" || false

			return {isLeft:isLeft}
		}
		,"methods"  :  {
			handleClick(){
				alert()
			}
		}  
	}
</script>