import $number from "../core/Number.core" ;
function touch(opt){
	opt              =  opt || {}
	this.posX        =  0 ;
	this.startX      =  0 ;
	this.posY        =  0 ;
	this.startY      =  0 ;
	this.$rem        =  !!opt.rem
}
touch.prototype.rem     =  function(e,callback){
	let touch       =  e.touches[0]
	touch.pageX     =  this.$rem ? $number.div( touch.pageX , REM ) : touch.pageX
	touch.pageY     =  this.$rem ? $number.div( touch.pageY , REM ) : touch.pageY
	e.touches       =  [touch]
	callback.call(true,e)
}
touch.prototype.start   =  function(e){
	e.stopPropagation() ;
	e.preventDefault()  ;
	this.rem( e , ()=>{
		let touch       =  e.touches[0]
	    this.startX     =  touch.pageX 
	    this.startY     =  touch.pageY 
	} )
}
touch.prototype.move    =  function(e){
	e.stopPropagation() ;
	e.preventDefault()  ;
	this.rem( e , ()=>{
		let touch       =  e.touches[0]
	    this.posX       =  touch.pageX 
	    this.posY       =  touch.pageY 
	} )
}
touch.prototype.end     =  function(e){
	this.posX           =  0 
	this.posY           =  0 
}
touch.prototype.listen  =  function( callback ){}
/*touch.start      =  function(){}
touch.move       =  function(){}
touch.end        =  function(){}*/
export default function(){
	return new touch
}