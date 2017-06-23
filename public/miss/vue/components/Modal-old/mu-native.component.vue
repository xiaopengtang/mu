<template>
	<transition name="mu-scale-in">
		<div class="mu-modal native" v-if="active">
	    	<div class="mu-modal-body mu-effect-card" v-if="effectActive">
				<slot></slot>
			</div>
		</div>
	</transition>
</template>
<script>
	export default {
		name    :  "mu-modal-native"
		,props  :  {
			"show"   :  Boolean
		}
		,data(){
			return {
				"active"   :  this.show
				,"effectActive"   :  false
			}
		}
		,methods   :  {
			handleClose(){
				this.effectActive   =  false
			}
		}
		,beforeUpdated(){
			if(!this.active){
				return this.effectActive = false
			}
			setTimeout( function(){
				this.effectActive   =  true
			}.bind(this) , 200 )
		}
		,mounted(){
			if(!this.active){
				return this.effectActive = false
			}
			setTimeout( function(){
				this.effectActive   =  true
			}.bind(this) , 200 )
		}
		,computed  :  {
			active(){
				return this.show
			}
		}
		,watch     :  {
			active(newValue){
				if(!newValue)
					return this.effectActive = false ;
				setTimeout( function(){
					this.effectActive   =  true
				}.bind(this) , 200 )
			}
			,effectActive(newValue){
				if(newValue){
					return ;
				}
				setTimeout( function(){
					this.active   =  false
				}.bind(this) , 200 )
			}
		}
	}
</script>