<template>
	<div :class="useDefineClass">
		<input 
		:type="type" 
		:class="inputClass" 
		:name="name" 
		@click="click"
		@focus="focus"
		@blur="blur"
		@keyup="keyup"
		@keydown="keydown"
		required="required" 
		:placeholder="placeholder" 
		/>
		<i class="mu-icon-close" @click.stop="handleClear"></i>
	</div>
</template>
<script>
	export default {
		props   :  {
			className  :  String
			,type      :  String
			,name      :  String
			,value     :  String
			,size      :  String
			,placeholder  :  String
		},
		name    :  "mu-input" ,
		data(){
			let useDefineClass  =  {"mu-input-field":true}
			let inputClass      =  {"mu-input icon-in-right":true}
			let size            =  this.size || ""
			size &&  (inputClass[size]    =  true);
			this.className && ( useDefineClass[this.className] = true );
			return {
				useDefineClass  :  useDefineClass
				,inputClass     :  inputClass , val : ""
			}
		}
		,methods  :  {
			click(e){
				this.$emit('click',e)
			}
			,focus(e){
				this.$emit('focus',e)
			}
			,blur(e){
				this.$emit('blur',e)
			}
			,keydown(e){
				this.$emit('keydown')
			}
			,keyup(e){
				this.$emit('keyup',e)
			}
			,handleClear(){
				// this.value  =  ""
			}
		}
	}
</script>