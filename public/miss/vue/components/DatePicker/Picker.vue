<template>
	<div class="mu-datepicker mu-effect-card">
		<div class="mu-datepicker-title">
			<button class="mu-icon-angle-double-left mu-left" @click="handleYearAdd(-1)"></button>
			<button class="mu-icon-angle-left mu-left" @click="handleMonthAdd(-1)"></button>
			<span>{{year}}年</span>
			<span>{{month}}月</span>
			<button class="mu-icon-angle-double-right mu-right" @click="handleYearAdd(1)"></button>
			<button class="mu-icon-angle-right mu-right" @click="handleMonthAdd(1)"></button>
		</div>
		<div class="mu-datepicker-body">
			<table>
				<tr>
					<th>周一</th>
					<th>周二</th>
					<th>周三</th>
					<th>周四</th>
					<th>周五</th>
					<th>周六</th>
					<th>周日</th>
				</tr>
				<tr v-for="(it,key) in list">
					<td @click.self="handleSelect($event,v.date,v.status!='lt'&&v.status!==void 0)" :class="{'selected':inputValue==v.date
					,'current' : v.status == 'eq' , 'prev' : v.status == 'lt'
					,'next'  :  v.status == 'gt' , 'today' : v.date == today
					,'none'  : v.status === void 0
					}" :data-date="v.date" v-for="(v,k) in it">{{v.date == today?"今天":v.day}}</td>
				</tr>
			</table>
		</div>
		<div :style="{'display':'none'}" class="mu-datepicker-bottom">
		    <a role="button">此刻</a>
			<button role="button" class="mu-button">确定</button>
		</div>
	</div>
</template>
<script>
    import miss from "miss" ;
    let $date       =  miss.Date
    let $           =  miss.Selector
    const getUseDateList   =  function( str ){
    	let $obj           =  new $date(str)
    	let list           =  $obj.getMonthList() ;
    	if( list.length == 0 )
    		return [];
    	let first          =  list[0] ;
    	let ret            =  []
    	let o              =  (function($firstDate){
    		let week       =  $firstDate.$date.getDay();
    		week           =  week === 0 ?7:week
    		let i          =  0 ;
    		let res        =  []
    		for (; i < week - 1 ; i++) {
    			res.push({
    				"class"   :  "none"
    			})
    		}
    		return res
    	})(first) 
    	let retCurDate     =  {}
    	for (let i = 0 ; i < list.length; i++) {
    		let $curDate     =  list[i] ;
    		let $thisWeek    =  $curDate.$date.getDay()
    		let c            =  $thisWeek/7 ;
    		let no           =  {
    			"date"       :  $curDate.format
    			,"status"    :  $curDate.status
    			,"day"       :  $curDate.$date.getDate()
    		}
    		o.push( no ) ;
    		$curDate.status == "eq" && (retCurDate = list[i]) ;
    		if( c === parseInt(c) ){
    			ret.push( o )
    			o            =  []
    		}
    	}
    	o && ret.push(o) ;
    	return {
    		"list"    :  ret
    		,"curDate":  {
    			$date    :  $obj.$date
    			,"format":  $obj.format("yyyy-mm-dd")
    		}
    	}
    }

	export default {
		props            :  {
			value        :  String
		}
		,data(){
			let data     =  getUseDateList( this.value  );	
			let $curDate =  data.curDate
			return {
				"list"   :  data.list
				,"year"  :  $curDate.$date.getFullYear()
				,"date"  :  $curDate.$date.getDate()
				,"month" :  $curDate.$date.getMonth() + 1
				,"format":  $curDate.format
				,"inputValue"    :  this.value
				,"forbidStatus"  :  false
				,"today"    :  (new $date).format("yyyy-mm-dd")
			}
		}
		,watch       :  {
			format(newValue){
				let data         =  getUseDateList( newValue )
				let $curDate     =  data.curDate
				this.list        =  data.list
				this.year        =  $curDate.$date.getFullYear()
				this.date        =  $curDate.$date.getDate()
				this.month       =  $curDate.$date.getMonth() + 1
			}
		}
		,methods     :  {
			handleSelect(e,date,auth){
				if( !auth ){
					return ;
				}
				this.inputValue    =  date 
				this.$emit("select",e)
			}
			,handleYearAdd(year){
				let $curDate     =  new $date( this.format )
				let $curYear     =  this.year
				$curYear        +=  year
				$curDate.$date.setFullYear($curYear)
				this.format      =  $curDate.format("yyyy-mm-dd")
				this.$emit("forbid")
			}
			,handleMonthAdd(month){
				let $curDate     =  new $date( this.format )
				let $curMonth    =  this.month - 1
				$curMonth       +=  month
				$curDate.$date.setMonth($curMonth)
				this.format      =  $curDate.format("yyyy-mm-dd")
				this.$emit("forbid")
			}
		}
	}
</script>