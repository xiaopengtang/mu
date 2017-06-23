<template>
	<div class="editer-ctrl">
		<div class="editer-ctrl-group">
			<div class="editer-ctrl-item">
				<i :class="{'mu-icon-smile-o':true,'active':showFace}" 
				@click="handleShowFace"></i>
				<transition name="mu-fadein-btm">
					<div class="editer-face mu-effect-card card-in-top" v-if="showFace">
						<i v-for="n in 75" @click="handleSelectFace" :class="'mu-em-face-'+n"></i>
					</div>
				</transition>
			</div>
			<div class="editer-ctrl-item">
				<i class="mu-icon-font"></i>
			</div>
			<div class="editer-ctrl-item">
				<i class="mu-icon-picture-o" @click="handleUploadImg"></i>
				<input @change="handleStartUploadImg" type="file"  name="picture" class="mu-css-hide" />
			</div>
			<div class="editer-ctrl-item">
				<i class="mu-icon-folder-o" @click="handleUploadZip"></i>
				<input @change="handleStartUploadZip" type="file" name="folder" class="mu-css-hide">
			</div>
		</div>
	</div>
</template>
<script>
    import miss from "miss"
    const {Upload,_,"Style":{read}}        =  miss ;
    // console.log( new UploadHandle )
    const defaultConfig     =  {
    	imgExt     :  "*.gif,*.png,*.jpg"
    }
    let UploadHandleImg  
    console.log( read(".mu-em-face-1").read("background-image") )
	export default {
		data(){
			return {
				showFace   :  false
			}
		}
		,beforeCreate(){
			let _this     =  this
			UploadHandleImg  =  Upload({
		    	type:defaultConfig.imgExt
		    	,refuseFileCallback(files){ console.log( ["this is refuseFiles",files] ) }
		    	,upload(uploaded){
		    		console.log([this,uploaded])
		    	}
		    	,ready(arr){
		    		_.each( arr , (url)=>{
		    			_this.$emit("render",function(){
		    				let dom   =  document.createElement("img")
		    			    dom.src   =  url
							return dom ;
						}) ;
		    		} )
		    	}
		    })
		}
		,methods   :  {
			handleUploadImg(e){
				let $dom       =  e.currentTarget
				let $input     =  $dom.nextElementSibling ;
				$input.click();
				// alert()
			}
			,handleUploadZip(e){
				let $dom       =  e.currentTarget
				let $input     =  $dom.nextElementSibling ;
				$input.click();
			}
			,handleStartUploadImg(e){
				let $dom       =  e.currentTarget
				
				console.log( new UploadHandleImg( $dom.files ) )
			}
			,handleStartUploadZip(){}
			,handleShowFace(){
				this.showFace    =  !this.showFace
			}
			,handleSelectFace(e){
				this.showFace    =  false
				this.$emit("render",function(){
					return e.currentTarget ;
				}) ;
			}
		}
	}
</script>