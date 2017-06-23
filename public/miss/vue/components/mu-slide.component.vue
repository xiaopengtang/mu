<script>
    import miss from "miss" ;
    import Vue from "vue"
    let {"Selector":$,_ , "Number":$number}   =  miss
	export default {
		name   :  "mu-slide"
		,data(){
			return {
				"width"    :  "auto"
				,"winWidth":  "100%"
				,"index"   :  0
				,"oldIndex":  0
				,"length"  :  0
				,"status"  :  false
			}
		}
		,watch :  {
			index( newVal , oldVal ){
				this.oldIndex    =  oldVal
				// console.log( arguments )
			}
		}
		,methods  :  {
			refresh(){
				let $body        =  this.$refs.body 
				let $width       =  $($body).width()
				let $slots       =  this.$slots.default
				let $w           =  0
				let $num         =  []
				_.each( $slots , (slot)=>{
					let {elm}    =  slot ;
					if( elm instanceof Element){
						let width      =  $(elm).width() 
						$w            +=  width    
						$num.push( elm )
					}
				} )
				$width           =  $width ? $width * $num.length : $w ;
				let $winWidth    =  $number.div( $width , $num.length )
				console.log( $winWidth )
				this.width       =  $width 
				this.winWidth    =  $winWidth 
				this.length      =  $num.length
			}
			,handleEnter(){
				this.status     =  !this.status
			}
			,handleExist(){
				this.status     =  !this.status
			}
			,handleIndex(type){
				let index     =  this.index
				type === "+" ? index++ : index-- ;
				this.index    =  index < 0 ? this.length - 1 : this.length < (index + 1) ? 0 : index;
			}
		}
		,mounted(){
			this.refresh();
		}
		,render(h){
			let $slots    =  this.$slots.default
			let i         =  0 
			return  (
				<div class="mu-slide" onMouseenter={this.handleEnter} onMouseleave={this.handleExist}
				>
				    <div class="mu-slide-win" style={{'width':(this.winWidth+ "px")}}>
				        <transition name="mu-fadein-left">
				            {this.status?(<i class="mu-icon-chevron-left" onClick={this.handleIndex.bind(this,"-")}></i>):null}
				        </transition>
				    	<div class="mu-slide-body" style={{'width':(this.width+  "px")}} ref="body">
						    {this._l( $slots , (slot , index) =>{
						    	if(slot.componentOptions){
						    		slot.componentOptions.propsData.index = i 
						    		slot.componentOptions.propsData.current   =  this.index
						    		slot.componentOptions.propsData.length    =  this.length
						    		slot.componentOptions.propsData.width     =  this.winWidth
						    		slot.componentOptions.propsData.total     =  this.width
						    		slot.componentOptions.propsData.oldIndex  =  this.oldIndex
						    		i++ ;
						    	}
						    	return slot
						    } )}
						</div>
						<transition name="mu-fadein-right">
						    {this.status?(<i class="mu-icon-chevron-right" onClick={this.handleIndex.bind(this,"+")}></i>):null}
						</transition>
				    </div>
				</div>
			);
		}
	}
</script>