<template>
	<transition name="mu-fadein-top">
		<div class="mu-tip" :class="type" v-if="active">
			<div class="mu-tip-body  mu-effect-card">
				<div class="mu-tip-label">
					<i :class="{
						'mu-icon-exclamation' : type == 'warn'
						,'mu-icon-check' : (!type || type == 'success')
						,'mu-icon-close' : type == 'error'
					}"></i>
				</div>
				<div class="mu-tip-txt">{{message}}</div>
			</div>
		</div>
	</transition>
</template>
<script>
	export default {
		name   :  "mu-tip"
		,props :  {
			"message"   :  String
			,"show"     :  Boolean  
			,"$type"    :  String
			,"time"     :  Number
		}
		,data(){
			return {
				"active"   :  false //this.show
				,"effect"  :  false
				,"type"    :  this.$type
				,"timer"   :  false
				,"showTime":  this.time || 1500
			}
		}
		,computed  :  {
			type(){
				return this.$type
			}
		}
		,destroyed(){
		}
		,created(){
		}
		,mounted(){
		}
		,watch  :  {
			active( newValue ){
				if(!newValue || newValue && this.timer )
					return ;
				this.timer    =  setTimeout( function(){
					clearTimeout( this.timer ) ;
					this.timer    =  false
					this.active   =  false
				}.bind(this) ,this.showTime )
			}
		}
	}
</script>