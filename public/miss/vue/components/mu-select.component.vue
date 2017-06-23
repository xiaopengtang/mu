<template>
	<div :class="userAddClass">
		<div :class="{'mu-select-field mu-input-field':true,'active':show}" ref="select-input">
			<input type="text" @focus="handleShow" @blur="handleShow" readonly="readonly" :placeholder="placeholder" :value="isSelected.label" class="mu-input icon-in-right">
			<i class="mu-icon-chevron-down"></i>
			<input type="hidden" :name="name" :value="isSelected.value" :data-label="isSelected.label">
		</div>
		<transition name="mu-fadein-btm">
		    <div class="mu-select-body mu-effect-card" v-if="show">
		        <mu-tobar>
		        	<ul>
			    	    <li v-if="search" class="mu-select-search" @click="handleSelect">
			    	        <mu-input 
			    	        @keyup="handleSearch"
			    	        @blur="handleSearchFocus"
			    	        type="text"
			    	        size="small"
			    	        ></mu-input>
			    	    </li>
						<li @click="handleSelect" v-for="it in list" :class="{'active':it.isSelected,'disabled':it.disabled}" :data-value="it.value">{{it.label}}</li>
					</ul>
		        </mu-tobar>
		    	
		    </div>
		</transition>
	</div>
</template>
<script>
    import $ from "../utils/selector.handle"  ;
    import _ from "../utils/fn.handle" ;
    import Input from "./mu-input.component.vue" ;
    import Bar from "./mu-tobar.component.vue"
	export default {
		name     :  "mu-select"
		,props   :  {
			"name"    :  String
			,"search" :  Boolean
			,"options":  Array  
			,"placeholder"  :  String
		}
		,components   :  {
			"mu-input"   :  Input
			,"mu-tobar"  :  Bar
		}
		,data(){
			console.log(this)
			let options       =  [{"value":1,"label":"测试"},{"value":11,"label":"测试"},{"value":12,"label":"测试","disabled":true},{"value":13,"label":"测试"},{"value":15,"label":"测试"},{"value":1,"label":"测试"},{"value":11,"label":"测试"},{"value":12,"label":"测试","disabled":true},{"value":13,"label":"测试"},{"value":15,"label":"测试"},{"value":1,"label":"测试"},{"value":11,"label":"测试"},{"value":12,"label":"测试","disabled":true},{"value":13,"label":"测试"},{"value":15,"label":"测试"},{"value":1,"label":"测试"},{"value":11,"label":"测试"},{"value":12,"label":"测试","disabled":true},{"value":13,"label":"测试"},{"value":15,"label":"测试"}]
			let isSelected    =  _.find( options , (v)=>{
				return !!v.isSelected
			} )
			let userAddClass  =  {"mu-select":true}
			this.className && ( userAddClass[this.className] = true ) ;
			return {
				"list"  :  options
			    ,"show" :  false
			    ,"userAddClass"  :  userAddClass
			    ,"isSelected" :  isSelected && _.current( isSelected ) || {"label":"","value":""}
			    ,"selected"   :  {
			    	"label"   :  ""
			    	,"value"  :  ""
			    }
			    ,"forbidStaus":  false
			};
		}
		,"methods"  :  {
			handleSelect(e){
				let $this       =  $(e.currentTarget)
				if( $this.hasClass("disabled") )
					return ;
				if($this.hasClass("mu-select-search")){
					return (this.forbidStaus = true);
				}
				let id          =  $this.data("value")
				let isSelected  =  _.find( this.list , (v)=>{
					let bool    =  v.value == id
					v.isSelected    =  bool
					return bool
				} )
				this.isSelected = isSelected.length > 0 && _.current(isSelected)
				this.show       =  false
			}
			,handleShow(e){
				setTimeout( function(){
					if(this.forbidStaus)
					    return ;
					this.show       =  e.type == "focus" //true
				}.bind(this) , 200 )
			}
			,handleSearchFocus(e){
				setTimeout( function(){
					this.show           =  false
				}.bind(this) , 200 )
			}
			,handleSearch(){}
		}
		,watch    :  {
			show(newValue){
				if( newValue ){
					return ;
				}
				this.forbidStaus      =  false ;
			}
		}
	}
</script>