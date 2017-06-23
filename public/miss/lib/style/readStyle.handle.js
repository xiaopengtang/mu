//读取某个样式

class handle {
	read(attr){
		let $dom    =  this.$dom
		let {currentStyle}    =  $dom
		if( currentStyle ){
			return currentStyle[attr]
		}else{
			let baseView   =  {}
			try{
				baseView   =  document.defaultView.getComputedStyle($dom,null)
			}catch(e){
				// 
			}
			// console.log( baseView )
			return baseView[attr] ;
		}
	}
}

class $read extends handle{
	constructor(dom){
		super() ;
		if( typeof dom === "string" ){
			let r    =  /^(.|#)(\w|\-)+$/
			let newDom   =  document.createElement("div")
			if( r.test( dom ) ){
				newDom[RegExp.$1=="."?"className":"id"]  =  dom.substr(1)
				newDom.style.display   =  "none" ;
				document.body.appendChild(newDom)
				// document.body.removeChild(newDom)
			}

			dom      =  newDom
		}
		this.$dom    =  dom
	}
}

export default (dom)=>{
	return new $read( dom )
}