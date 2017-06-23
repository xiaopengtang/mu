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
	,eq(o,n ,isStrcit){
		if( isStrcit && _.type(o) !== _.type(n) )
			return ;
	}
	,current(arr){
		return arr[0]
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
}


export default $fn