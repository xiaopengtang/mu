<template>
	<div :class="{'mu-drag':true,'active':cursor && allow}" 
	 :style="{'top':positionY+'px','left':positionX+'px'}"
	>
		<slot></slot>
	</div>
</template>
<script>
    import miss from "miss" ;
    let {"Selector" :  $}   =  miss
	export default {
		name   :  "mu-drag"
		,props   :  {
			cursor  :  {
				type    :  Boolean
				,default:  true
			}
		}
		,data(){
			return  {
				allow   :  false
				,maxWidth   :  0
				,maxHeight  :  0
				,width      :  0
				,height     :  0
				,startX     :  0
				,startY     :  0
				,positionX  :  0
				,positionY  :  0
			}
		}
		,mounted(){
			let $dom      =  $(this.$el) 
			let $parent   =  $dom.parent()
			this.maxHeight   =  $parent.height()
			this.maxWidth    =  $parent.width();
			this.width    =  $dom.width()
			this.height   =  $dom.height()
			let $body     =  $(document)
			let xpage , ypage
			$body.bind("mousemove",(e)=>{
				e.preventDefault();
				if( !this.allow )
					return  ;
				this.startX     =  e.pageX 
				this.startY     =  e.pageY - this.maxHeight
			})
			$body.bind("mouseup",(e)=>{
				e.preventDefault();
				this.allow    =  false
			})
			$parent.bind("mousedown",(e)=>{
				e.preventDefault();
				this.startX     =  e.pageX 
				this.startY     =  e.pageY - this.maxHeight
				this.allow    =  true
			})
		}
		,computed  :  {
		}
		,watch     :  {
			active(newVal){
			}
			,startY(newVal,oldVal){
				let y    =  this.positionY	
				y       +=  newVal - oldVal
				this.positionY    =  y < 0 ? 0 : y ;
			}
			,startX(newVal,oldVal){
				this.positionX   +=  newVal - oldVal
			}
		}
		,methods   :  {
			handlestart(e){
				/*alert(e.offsetX)
				this.startY  =  e.offsetY
				this.startX  =  e.offsetX*/
				// this.allow   =  true
			}
		}
		,distoryed(){}
	}
</script>