"use strict" ;
const $path          =  require("path") ;
const $fs            =  require("fs") ;
const _DIR_CACHE     =  $path.resolve("./cache") ;
exports    =  module.exports   =  {} ;
exports.get          =  function get(key){
	let file    =  $path.join(_DIR_CACHE,`${key}.cache`) ;
	let data    =  $fs.existsSync( file ) ? $fs.readFileSync(file,"utf8") : null ;
	return data !== null ? JSON.parse(data ) : data ;
}
exports.set          =  function set(key,val){
	let file    =  $path.join(_DIR_CACHE,`${key}.cache`) ;
	return $fs.writeFileSync(file, JSON.stringify(val) );
}