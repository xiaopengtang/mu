<template>
	<div class="mu-slide-item" :class="className" :style="{'width':width+'px','left':this.pos + 'px'}" :data-index="index" :data-current="current">

	    <!-- <a :href="href" class="mu-css-block">
			<div class="mu-slide-img">
				<img :src="src">
			</div>
			<div class="mu-slide-title">
				<h3>{{label}}</h3>
			</div>
		</a> -->
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name    :  "mu-slide-item"
		,props  :  {
			"index"   :  {
				"type"      :  Number
				,"default"  :  0
			}
			,"current"   :  0
			,"width"     :  "auto"
			,"total"     :  0
			,"oldIndex"  :  {
				"type"   :  Number
				,"default"  :  0
			}
		}
		,data(){
			return {
				"className"   :  "" 
				,"pos"        :  0
			} ;
		}
		,computed   :  {
			className(){
				let className    =  this.index == this.current ? "active" :
				(this.current + 1 === this.index || this.current + 1 === this.total && this.index === 0 ) ? "next" : ( this.current - 1 === this.index || this.current - 1 < 0 && this.index === this.total - 1 )?"prev" : "" ;
				let arr          =  {
					"active"     :  "0"
					,"prev"      :  this.width * -1
					,"next"      :  this.width
				}
				this.pos         =  arr[className]?arr[className]:0 ;
				// this.pos         =  className == "active" ? 0 : 
				// console.log( this.index )
				return className //this.index == this.oldIndex ? "pre" : "next"
			}
		}
		,watch   :  {
			className(){
				console.log( arguments )
			}
		}
	}
</script>