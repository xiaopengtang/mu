<template>
    <transition name="mu-fadein-right">
    	<div class="mu-notify mu-effect-card" v-if="active">
    	    <i :class="icon" v-if="icon" ></i>
    	    <div class="mu-notify-body">
    	    	<h3>{{title}}</h3>
    	        <div class="mu-notify-txt">{{message}}</div>
    	    </div>
    	    <i class="mu-icon-close" @click="handleClose"></i>
    	</div>
    </transition>
</template>
<script>
	export default {
		"name"    :  "mu-notify"
		,"props"  :  {
			"title"  :  String
			,"message"  :  String
			,"time"  :  String
			,"icon"  :  String
		}
		,data(){
			return {
				active   :  false
				,showTime:  3000
			}
		}
		,computed  :  {
			showTime(){
				return this.time !== void 0 ? this.time : 3000  ;
			}
		}
		,methods  :  {
			handleClose(){
				this.active   =  false
			}
		}
		,watch    :  {
			active(newValue){
				if( !newValue )
					return ;
				this.showTime && setTimeout(function(){
					this.active   =  false
				}.bind(this),this.showTime)
			}
		}
	}
</script>