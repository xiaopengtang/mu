import vue,{component} from "vue" ;
import Slide from "./web/components/slide.component.vue"
import Sidemenu from "./web/components/sideMenu.component.vue"
import $ from "jquery" ;
import mu  from "miss.vue"
// let Search    =  mu.Search
let {Search}  =  mu ;
console.log( Search )
console.log( Slide )
let Application          =  new vue({
	el                   :  ".xp-page"
	,components          :  {
		Slide            :  Slide
		,Sidemenu        :  Sidemenu
		,Search          :  Search
	} 
	,data(){
		return {
			tab          :  {
				list     :  {}
				,ctrl    :  {}
			}
			,slide       :  {
				list     :  [{id:2121,img:"//m.tuniucdn.com/fb2/t1/G1/M00/4B/AA/Cii9EFh95sCIfXaUAAFzgoPGNwQAAHBTAPZTDgAAXOa993.jpg"}
                            ,{id:2121,img:"//m.tuniucdn.com/fb2/t1/G1/M00/4B/AA/Cii9EFh95sCIfXaUAAFzgoPGNwQAAHBTAPZTDgAAXOa993.jpg"}
                            ,{id:2121,img:"//m.tuniucdn.com/fb2/t1/G1/M00/4B/AA/Cii9EFh95sCIfXaUAAFzgoPGNwQAAHBTAPZTDgAAXOa993.jpg"}
				]
			}
		}
	}
	,methods             :  {
		greet(){
			alert()
		}
	}
	
})
let uid         =  6675783 ;
    /*$.ajax({
		url    :  "//mb.com/api/selective/index/setShopcart"
		,type  :  "POST"
		,data  :  JSON.stringify({
			data   :  {
				poster        :  "//m.tuniucdn.com/fb2/t1/G1/M00/4B/30/Cii-U1h9tnuIF2wyAARAWlmfqnAAAHAzgIbUqcABEBy873.png"
			    ,productName  :  "便携式飞机毯"
			    ,referencePrice   :  69
			    ,salePrice    :  99
			    ,id           :  210454804
			    ,count        :  1
			    ,productId    :  210454804
			    ,attr         :  [{name:"大小",value:"170/L"}]
			}
			,uid   :  uid
		})
		,success( data ){
			console.log( data )
		}
	})*/


// console.log( Slide )