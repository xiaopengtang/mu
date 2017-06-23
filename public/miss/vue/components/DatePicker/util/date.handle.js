export default (function( fn ){
	return fn.call(true)
})(function(){
	function date(str){
		this.$date      =  str && new Date(str) || new Date
	}

	date.prototype.format     =  function( fmt ){
		return date.format( fmt , this.$date )
	}
    //获取本月
	date.prototype.getMonthList    =  function(){
		return date.getMonthList( this.$date ) ;
	}
    //获取本周
	// date.prototype.getWeekList     =  function(){}

	date.getMonthList   =  function( str ){
		str             =  str || new Date
		let type        =  Object.prototype.toString.call(str)
		if( type != "[object String]" && type != "[object Date]" )
			return []
		let $date       =  type != "[object String]" && str || new Date( str ) ;
		$date           =  new Date( date.format("yyyy-mm-dd",$date) ) ;
		let today       =  new Date( date.format("yyyy-mm-dd") ) 
		let time        =  today.getTime()
		let max         =  date.getMonthMaxDay( new Date( date.format("yyyy-mm-dd",$date) ) )
		let i           =  1 ;
		let thisMonth   =  $date.getMonth() + 1
		let prefix      =  [$date.getFullYear(),thisMonth<10?("0"+thisMonth):thisMonth].join("-")
		let ret         =  []
		for ( ; i <= max ; i++) {
			let curDateStr     =  [prefix,i<10?("0"+i):i].join("-") ;
			let curDate        =  new Date(curDateStr)
			ret.push({
				"format"     :  curDateStr
				,"status"    :  curDate.getTime() < time && "lt"
				|| curDate.getTime() == time && "eq" || "gt" 
				,"$date"     :  curDate
			})
		}
		
		return ret ;
	}

	date.getMonthMaxDay =  function( $date ){
		let  $$date     =  $date || new Date();
	    let  month      =  $$date.getMonth();
	    $$date.setMonth(month + 1);
	    $$date.setDate(0);
	    return $$date.getDate();
	}

	date.format         =  function( fmt , $date ){
		$date           =  $date || new Date
		fmt             =  fmt || "yyyy-mm-dd"
		let format      =  {
			"m+"        :  $date.getMonth() + 1, //月份   
	        "d+"        :  $date.getDate(), //日   
	        "h+"        :  $date.getHours(), //小时   
	        "i+"        :  $date.getMinutes(), //分   
	        "s+"        :  $date.getSeconds(), //秒   
		}
	    if (/(y+)/.test(fmt)) 
	    	fmt    =  fmt.replace(RegExp.$1, ($date.getFullYear() + "")
	        .substr(4 - RegExp.$1.length));
	    for (var k in format)
	        if (new RegExp("(" + k + ")").test(fmt)) 
	        	fmt    = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (format[k]) : (("00" + format[k]).substr(("" + format[k]).length)));
		return fmt ;
	}

	date.eq      =  function(str1,str2){
		let obj1     =  new Date( str1 )
		let obj2     =  new Date( str2 )
		return obj1.getTime()  === obj2.getTime()
	}
	return date
})