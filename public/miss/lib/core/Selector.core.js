import _ from "./Common.core" ;
import $bug from "./Selector/bug" ;

function Selector(el){
	let $el   
	let type        =  _.type(el)
	if( type == "string" ){
		$el          =  document.querySelectorAll(el);
	}else if( typeof el == "object" ){
		$el         =  Selector.isDom(el)?el:null
	}else{
		return _.warn("miss.vue warn:选择器有误")
	}
	if( !$el ){
		return _.warn("miss.vue warn:选择器有误");
	}
	// console.log
	let $type       =  _.type($el)
	let isObject    =  typeof $el == "object" &&  $type != "array"
	this.length     =  isObject?1:$el.length
	this.$dom       =  isObject?[$el]:$el ;  
}

Selector.prototype.hasClass       =  function(cls){
	if( !cls || _.trims(cls).length == 0 )
		return false ;
	let rg          =  new RegExp("^"+cls+"\\s{1,}|\\s{1,}"+cls+"$|\\s{1,}"+cls+"\\s{1,}|^"+cls+"$" ) ;
	let $doms       =  this.$dom
	let bool        =  true
	_.each( $doms , (dom)=>{
		if( bool === false ){
			return bool ;
		}
		let className        =  dom.className
		bool         =  rg.test(className)
	} )
	return bool
}

Selector.prototype.html           =  function(html){
	let $dom         =  _.current(this.$dom)
	return html !== void 0 && ($dom.innerHTML = html)
	|| $dom.innerHTML ;
}
Selector.prototype.append           =  function(node){
	let $dom         =  _.current(this.$dom)
	return $dom.appendChild(node) ;
}
Selector.prototype.trigger           =  function(name){
	let $dom         =  _.current(this.$dom)
	return $dom[name]() ;
}
Selector.prototype.next           =  function(){
	let $dom         =  _.current(this.$dom).nextSibling()
	return new Selector( $dom ) ;
}
Selector.prototype.width          =  function(){
	let $dom         =  this.$dom[0]
	return $dom.offsetWidth ;
}
Selector.prototype.height          =  function(){
	let $dom         =  this.$dom[0]
	return $dom.offsetHeight ;
}
Selector.prototype.parent         =  function(){
	let $dom         =  this.$dom[0]
	if( $dom === void 0 )
		return null ;
	return new Selector($dom.parentNode)
}

Selector.prototype.addClass       =  function(cls){
	let _this        =  this
	let rg           =  new RegExp("^"+cls+"\\s{1,}|\\s{1,}"+cls+"$|\\s{1,}"+cls+"\\s{1,}|^"+cls+"$" ) ;
	_.each( this.$dom , (dom)=>{
		let className       =  dom.className
		dom.className      +=  !rg.test(className)?cls:"" ;
	} )
	return this
}

Selector.prototype.removeClass    =  function(cls){
	let _this        =  this
	let rg           =  new RegExp("^"+cls+"\\s{1,}|\\s{1,}"+cls+"$|\\s{1,}"+cls+"\\s{1,}|^"+cls+"$" ) ;
	_.each( this.$dom , (dom)=>{
		let className      =  dom.className
		dom.className      =  rg.test(className)?className.replace(rg ," "):className ;
	} )
	return this
}

Selector.prototype.toggleClass     =  function(cls){
	this[!this.hasClass(cls)?"addClass":"removeClass"](cls) ;
	return this
}
Selector.prototype.attr            =  function(key,value){
	let $dom        =  _.current(this.$dom)
	let type        =  _.type( key )
	let ret         =  null
	if( type == "object" ){
		_.each( key , (v,i)=>{
			$dom.setAttribute(i,v)
		} )
	}else if(type === "string" && value !== void 0){
		$dom.setAttribute(key,value)
	}else if(type === "string" && value === void 0){
		ret         =  $dom.getAttribute(key)
	}
	return value || ret ;
}

Selector.prototype.data            =  function(key,value){
	let $dom        =  _.current(this.$dom)
	let dataset     =  $dom.dataset 
	let ret         =  null
	if( dataset === void 0 ){
		_.warn("该浏览器不支持H5中data属性") ;
		value != void 0 && _.type( key ) === "string"
		&& this.attr(key,typeof value == "object" && JSON.stringify( value ) || value ) ;
		value === void 0 && _.type(key) === "string"
		&& ( ret = ((_dom,k)=>{
			let r       =  _dom.attr("data-"+k)
			try{
				r        =  eval( "(" + r + ")" )
			}catch(e){
				_.warn(e)
			}
			return r ;
		})(this,key) );
 	}else{
		value !== void 0 && _.type(key) == "string" 
		&& ($dom.dataset[key] = value) ;
		value === void 0 && _.type(key) == "string" && (ret = dataset[key]);
	}
	return value || ret
}

Selector.isDom      =  (node)=>{
	return typeof HTMLElement != "undefined" && node instanceof HTMLElement
	|| node.nodeType >= 1 && _.type( node.nodeName  ) === "string" || false
}
Selector.prototype.off          =  function(name){
	return (function(nodes , fn ){
		return _.each( nodes , fn )
	})(this.$dom,function(node){
		let events      =  node.events ;
		return ({
			true(node,name,fn){
				return  fn.call(true,function(callback){
					return  node.removeEventListener(name,callback,false)
				})
			}
			,false(node,name,fn){
				return  fn.call(true,function(callback){
					node.detachEvent("on"+name,callback)
				})
			}
		})[(!!node.removeEventListener).toString()](node,name,function(fn){
			let events     =  [] 
			try{
				events     =  node.events[name]
			}catch(e){
				events     =  []
			}
			if(events.length < 1)
				return ;
			return  _.each( events , (callback)=>{
				fn( callback );
				node.events[name].shift();
			} )
		})
	})
}
Selector.prototype.bind         =  function(name,callback,bool){
	return ( function( nodes , fn ){
		return _.each( nodes , fn )
	} )
	(this.$dom,function(e){
		!e.events && (e.events = {});
		!e.events[name] && (e.events[name] = [])
		let fn       =  function(evt){
			evt      =  $bug.events.evt(evt)  ;
            typeof callback == "function" && callback.call(e,evt)
        } 
		e.events[name].push(fn)
		if(e.addEventListener){
	        e.addEventListener(name, fn, true );
	        return true;
	    } else if(e.attachEvent){
	        e.attachEvent('on' + name, fn );
	        return true;
	    }
	})
}

export default (el)=>{
	return new Selector(el)
}