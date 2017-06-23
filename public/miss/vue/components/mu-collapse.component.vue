<script>
	export default {
		name   :  "mu-collapse"
		,data(){
			return {
				"item"   :  []
				,"index" :  null
			}
		}
		,methods   :  {
			addItem(node){
				this.item.push( node )
				return this.item.length
			}
			,handleItem(index){
				this.index    =  index
			}
		}
		,render(h){
			return (
				<div class="mu-collapse">
					{this._l( this.$slots.default , node=>{
						// console.log( node.componentOptions.propsData )
						return node ;
					} )}
				</div>
			);
			// console.log( this.$slot )
		}
	}
</script>