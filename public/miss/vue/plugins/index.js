import search from "./Search/index.vue"
import Vue from "vue" ;
import online from "./Online/index.vue" ;
import editer from "./Editer/index.vue" ;
import menu from "./Menu/index.js" ;
console.log( menu )
const installList  =  [editer,search,online,menu]

const install      =  (list)=>{
	if( install.installed ){
		return ;
	}
	list.forEach( (v)=>{
		Vue.component( v.name , v )
	} )

	install.installed       =  true ;
}

install( installList )

export default {editer,search,online,menu}