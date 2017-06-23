<template>
	<div ref="txt" :class="{'mu-text':true,'not-allow':notAllow}" :style="{'height':height}">
		<slot></slot>
	</div>
</template>
<script>
    import miss from "miss" ;
    let { "Style" : {"compatible":$compatible} 
    , "Selector" : $ , "Number" : $number
    }  =  miss
    let $style    =  $compatible("-webkit-line-clamp") ;
	export default {
		"name"   :  "mu-text"
		,"props" :  {
			"line"   :  {
				"type"     :  Number
				,"default" :  1
			}
			,"lineheight" :  {
				"type"     :  Number
				,"default" :  1
			}
		}
		,data(){
			return {
				"allow"   :  !!$style.$props
				,"height" :  "auto"
				,"notAllow"  :  false
			}
		}
		,mounted(){
			let $line     =  $(this.$refs.txt)
			let $height   =  $line.height()
			let $h        =  $number.mul(parseFloat(this.line),parseFloat(this["lineheight"]) ) ;
			this.notAllow  =  $h <= $height
			this.height    =  $h + "px" ;
		}
	}
</script>