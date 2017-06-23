<template>
	<div :class="className" @DOMMouseScroll.prevent="handlemouse" @mousewheel.prevent="handlemouse" 
	:style="{'height':y+'rem'}"
	>
		<div class="mu-tobar-body" :style="bodyStyle" ref="body">
			<slot></slot>
		</div>
		<div class="mu-tobar-x-ctrl"></div>
		<div class="mu-tobar-y-ctrl" :style="ctrly"></div>
	</div>
</template>
<script>
    import miss from "miss"
    let {"Selector":$,Number:$num,"Style":{"compatible":$css}}         
    =  miss
    const defaultProps         =  {
    	"height"  :  2
    }
	export default {
		"name"   :  "mu-tobar"
		,props   :  {
			"class"  :  String
			// ,width   :  Number
			,height  :  Number
		} 
		,data(){
			let x        =  parseFloat(this.width) || defaultProps.width
			let y        =  parseFloat(this.height) || defaultProps.height
			return {
				x    :  x
				,y   :  y  //视觉窗口高度
				,xctrl   :  x
				,yctrl   :  y //滚动条高度
				,$scale  :  1 //滚动条比例
				,$height :  y //实际高度
				,ctrlMove:  0  //滚动条移动距离
				,bodyMove:  0  //body移动距离
				,bodyStyle  :  {}
				,ctrly   :  {}
				,className  :  ''
			}
		}
		,computed   :  {
			bodyStyle(){
				return $css("transform").toObject( `translateY(${this.bodyMove}rem)` )
			}
			,className(){
				let className    =  {'mu-tobar':true}
				this.class && (className[this.class]  =  true) ;
				return className
			}
			,ctrly(){
				let ctrly    =  $css("transform").toObject( `translateY(${this.ctrlMove}rem)` )
				ctrly.height =  this.yctrl+"rem"
				ctrly.display=  this.$height <= this.yctrl ? "none" : "block"
				return ctrly
			}
		}
		,mounted(){
			this.$update() ;
		}
		,update(){
			alert()
		}
		,updated(){
			// console.log(this.$el)
		}
		,methods      :  {
			handlemouse(e){
				e.stopPropagation();
				let detail    =  e.wheelDelta?e.wheelDelta:(e.detail>0?-120:120)  ;
				detail        =  $num.div( detail , 100 ) ;
				let height    =  this.bodyMove+detail
				if( Math.abs(height) + this.y > this.$height ){
					this.bodyMove   =  (this.$height - this.y)* -1
					return this.ctrlMove = this.y - this.yctrl;
				}
				if(height > 0){
					this.bodyMove   =  0 ;
					return this.ctrlMove  =  0 ;
				}
				this.bodyMove+=  detail ;
				this.ctrlMove+=  $num.mul( this.$scale , detail * -1) ;
			}
			,$update(){
				let $body         =  this.$refs.body
				let height        =  $num.div($body.offsetHeight,100) ;
				let $parent       =  $(this.$el)
				this.$height      =  height
				this.$height < this.y && (this.y = height);
				this.$scale       =  $num.div(this.y,height)
				this.yctrl        =  $num.mul(this.$scale,this.y)
			}
		}
	}
</script>