<template>
	<div class="mu-tooltip">
		<div class="mu-tooltip-body">
		    <div class="mu-tool-tip-container"
		    @mouseover="handleActive"
	    	@mouseout="handleActive"
	    	@click="handleActive"
		    >
		    	<slot></slot>
		    </div>
		    <transition name="mu-fadein">
				<div :class="tipClass" v-if="active">
					<div class="mu-tooltip-txt">{{title}}</div>
				</div>
			</transition>
		</div>
	</div>
</template>
<script>
    import miss from "miss" ;
    let {_}      =  miss
	export default {
		name    :  "mu-tooltip"
		,props  :  {
			"title"     :  String
			,"position" :  String
			,"evt"      :  {
				type    :  String
				,default:  "hover"
			} 
		}
		,data(){
			return {
				tipClass   :  {}
				,active    :  false
			}
		}
		,methods   :  {
			handleActive( e ){
				let type   =  e.type
				if( this.evt == "hover"){
					this.active   =  type != 'mouseout' ;
				}else{
					this.active   =  !this.active
				}
				// console.log(e.type)
			}
		}
		,computed  :  {
			tipClass(){
				let className   =  {"mu-tooltip-title":true}
				let arr         =  this.position.split("-")
				arr.length > 0 && _.each( arr , (v)=>{
					className[v]    =  true
				} )
				return className
			}
		}
	}
</script>