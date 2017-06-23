<script>
    // import Modalbase from "./Modal/ModalBase.component.vue" ;
    import Picker from "./DatePicker/Picker.vue" ;
    import miss from "miss" ;
    let $       =  miss.Selector ;
	export default {
		name  : "mu-datepicker" ,
		props : { 
			"name"       :  String
			,"position"  :  String
			,"placeholder"  :  String
			,"value"     :  String
		}, 
		data(){
			return {
				"type"       :  this.type !== void 0?this.type:"text"
				,"position"  :  this.position || "normal"
				,"switchPicker"  :  false
				,"inputValue"    :  this.value
				,"forbidStatus"  :  false
				,"timer"     :  false
			}
		}
		,"components" :  {
			/*"modal-base"    :  Modalbase
			,*/"Picker"       :  Picker
		}
		,render(){
			let $down          =  this.position != "fixed" && this.switchPicker 
			&& (
				<div class="mu-datepicker-container down">
					<Picker value={this.inputValue} on-forbid={this.forbidHide} on-select={this.handleSelect}></Picker>
				</div>
				) || null ;
			let $picker        =  this.position == "fixed"?
			(
				<modal-base show={this.switchPicker}>
					<Picker value={this.inputValue} on-forbid={this.forbidHide} on-select={this.handleSelect} slot="modal-body"></Picker>
				</modal-base>
			):
			(
				<transition name="mu-fadein-btm">
					{$down}
				</transition>
			) ;
			let className      =  "mu-input"
			this.switchPicker && (className += " "+"active");
			return (
				<div class="mu-datepicker-group">
				    <input ref="input" placeholder={this.placeholder} class={className} 
				    onBlur={this.handleFocus} readonly="readonly" onFocus={this.handleFocus} type="text" name={this.name} value={this.inputValue} />
				    {$picker}
				</div>
			);
		}
		,"watch"   :  {
			switchPicker(){
				if(this.switchPicker)
					return ;
				this.forbidStatus   =  false 
			}
		}
		,"methods"    :  {
			handleClick(e){

			}
			,forbidHide(){
				if(this.forbidStatus)
					clearTimeout( this.timer );
				this.forbidStatus   =  true
				this.timer   =  setTimeout(function(){
					this.forbidStatus   =  false ;
					this.$refs.input.focus();
					this.timer      =  false
				}.bind(this),300)
			}
			,handleFocus(e){
				setTimeout(function(){
					if( this.forbidStatus )
						return ;
					this.switchPicker         =  e.type == "focus"
				}.bind(this),200)
			}
			,handleSelect(e){
				let $this       =  $(e.currentTarget)
				let date        =  $this.data("date")
				this.inputValue =  date
			}
		}  
	}
</script>