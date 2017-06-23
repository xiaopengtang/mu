<script>
    import $ from "../utils/selector.handle" ;
	export default {
		"name"     :  "mu-tabs"
		,data(){
			
			return {
				"pane"      :  []
				,"index"    :  0
			};
		}
		,methods    :  {
			addPane(node){
				this.pane.push(node)
				return this.pane.length - 1 ;
			}
			,handleTab(e){
				let $this         =  $(e.currentTarget)
				if( $this.hasClass("active") ){
					return ;
				}
				this.index        =  parseInt( $this.data("index") )
				this.$forceUpdate()
			}
		}
		,render(h){
			const tabs     =  this._l( this.pane , ( pane , index )=>{
				return (
					<div class={{
						"mu-tab"    :  true
						,"active"   :  this.index == index
					}}
					data-index={index}
					onClick={this.handleTab}
					>{pane.label}</div>
				) ;
			} )
			return (
				<div class="mu-tabs">
					<div class="mu-tabs-title">
					    {tabs}
					    <div class="mu-tab-bar"></div>
					</div>
					<div class="mu-tabs-body">{this.$slots.default}</div>
				</div>
			);
		}
	}
</script>