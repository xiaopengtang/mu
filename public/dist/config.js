/*;(function(fn){
	if( typeof require === "undefined" )
		throw new Error("please use require.js together")
	return fn.call(true)
})(function(){*/
	require.config({
		paths           :  {
			"react"           :  "//127.0.0.1/React/react-with-addons.min"
			,"react-router"   :  "//127.0.0.1/React/ReactRouter.min"
			,"react-dom"      :  "//127.0.0.1/React/react-dom.min"
			,"react-dom-server"      :  "//127.0.0.1/React/react-dom-server.min"
			,"jquery"         :  "//127.0.0.1/jquery/jquery-3.1.1.min"
			,"vue"            :  "//127.0.0.1/vue/vue.min"
			,"miss.react"     :  "//127.0.0.1:4000/dist/miss.react"
			,"miss.vue"       :  "//127.0.0.1:4000/dist/miss.vue"
			,"miss"           :  "//127.0.0.1:4000/dist/miss"
			,"JsBarcode"      :  "//127.0.0.1/JsBarcode.all.min"
			,"qrcode"         :  "//127.0.0.1/qrcode.min"
		}
		/*,map            :  {
			"*"         :  {
				css     :  "//127.0.0.1/require/require-css/css.min"
			}
		}*/
	})
// })