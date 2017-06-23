<template>
	<div class="mu-plugins editer">
		<Ctrl @render="handleCtrlRender"></Ctrl>
		<mu-tobar height=".8" ref="tobar">
			<EditerBody ref="body" @del="handleDelContent"></EditerBody>
		</mu-tobar>
		<textarea :name="name" class="mu-css-hide">{{html}}</textarea>
	</div>
</template>
<script>
    import Ctrl from "./Components/ctrl.vue" ;
    import EditerBody from "./Components/body.vue" ;
    import miss from "miss"
    let {Selector:$}    =  miss
	export default {
		name   :  "mu-plugin-editer"
		,props   :  {
			name   :  String
			,value :  String
		}
		,components  :  {
			Ctrl,EditerBody
		}
		,data(){
			return {
				html   :  this.value
			}
		}
		,computed   :  {
			/*html(){
				return this.$refs.body.innerHTML ;
			}*/
		}
		,methods  :  {
			handleCtrlRender(h){
				let body      =  this.$refs.body.$el //$(".editer-body")
				let $body     =  $(body)
				$body.append( h() )
				// console.log( this.$refs.tobar )
				this.$refs.tobar.$update();
			}
			,handleDelContent(){
				this.$refs.tobar.$update();
			}
		}
	}
</script>