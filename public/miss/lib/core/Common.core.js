//判断类型
let $classType    =  (()=>{
	let $classArr = "Boolean Number String Function Array Date RegExp Object Error Symbol"
    .split(" ")
    let ret       =  {}
    for (let i = 0; i < $classArr.length ; i++) {
    	ret["[object "+$classArr[i]+"]"]     =  $classArr[i].toLowerCase();
    }
    return ret
})();

let $fn          =  {
	type(o){
		return $classType[Object.prototype.toString.call(o)] ;
	}
	,noop        :  function(){}
	,isFunction(fn){
		return $fn.type( fn ) == "function"
	}
	,isObject(obj){
		return $fn.type( obj ) == "object"
	}
	,isWindow(obj){
		return self.self === self
	}
	,trims(str){
		return str.replace(/\s/g, '') ;
	}
	,find(arr,conditionFn){
		let ret           =  []
		$fn.each(arr,(v,k)=>{
			let bool      =  $fn.isFunction(conditionFn) && conditionFn.call(true,v,k) || false
			bool && ret.push(v)
		})
		return ret 
	}
	,current(arr){
		return arr[0]
	}
	,keys(arr){
		let ret      =  []
		$fn.each( arr , (v , k)=>{
			ret.push(k)
		} )
		return ret ;
	}
	,values(arr){
		let ret      =  []
		$fn.each( arr , (v , k)=>{
			ret.push(v)
		} )
		return ret ;
	}
	,inArray(key,arr){
		let bool      =  false ;
		$fn.each(arr,(v)=>{
			if( bool)
				return false ;
			bool      =  v == key
		})
		return bool ;
	}
	,warn(message){
		typeof console != "undefined" &&"warn" in console && console.warn( message )
	}
	,log(message){
		typeof console != "undefined" &&"log" in console && console.warn( message )
	}
	,isArrayLike(arr){
		let length      =  arr && "length" in arr && arr.length
		let type        =  $fn.type(arr)
		if( type == "function" || $fn.isWindow(arr) )
			return false ;
		return type === "array" || length === 0 || 
		$fn.type(length) === "number" && length > 0 && (length - 1) in arr ;
	}
	,each(arr,callback){
		let  i = 0 ;
		if( $fn.isArrayLike(arr) ){
			for ( ; i < arr.length ; i++) {
				if( callback.call(arr[i],arr[i],i) === false )
					break ;
			}
		}else{
			for(i in arr){
				if( callback.call(arr[i],arr[i],i) === false )
					break ;
			}
		}
	}
	,extend(){
		let deep         =  false ;
		let target       =  arguments[0] ;
		let length       =  arguments.length
		let i            =  1 ;
		if( $fn.type( target ) == "boolean" ){
			deep         =  target
			target       =  arguments[i]
			i++ ;
		}
		typeof target != "object" && !$fn.isFunction( target )
		&&( target = {} );
		if ( i === length ) {
			target     =  {};
			i--;
		}
		for (; i < length ; i++) {
			let opts     =  arguments[i] ;
			if( opts === null || opts === void 0 )
				return ;
			for( let name in opts ){
				let src        =  target[name]
				let copy       =  opts[name]
				if( src == copy ){
					continue ;
				}
				let isArray    =  Array.isArray( copy ) , clone ;
				if(deep && copy && $fn.isPlainObject( copy ) || isArray){
					clone      =  ({
						true(){
							isArray        =  false ;
							return src && Array.isArray( src ) ? src : [];
						}
						,false(){
							return src && $fn.isPlainObject( src ) ? src : {};
						}
					})[isArray.toString()]() ;
					target[ name ]         =  $fn.extend( deep, clone, copy );
				}else{
				    target[ name ]         =  copy;
				}
			}
		}
		return target ;
	}
	,isPlainObject(obj){
		if( !$fn.isObject( obj ) )
			return false;
		let proto          =  Object.getPrototypeOf( obj )
		if( !proto )
			return true ;
		let construct      =  ({}).hasOwnProperty.call(proto,"constructor") && proto.constructor ;
		return $fn.isFunction( construct ) && ({}).hasOwnProperty.toString.call( construct ) === ({}).hasOwnProperty.toString.call(Object);
	}
}


export default $fn