import React,{Component,PropTypes} from "react" ;
import miss from "miss" ;
const {"Date":$date,_}   =  miss ;
class Index extends Component{
	state    =  {
		"month"   :  []
		,"day"    :  {}
		,"default":  ""
	} ;
	static propTypes    =  {
		"onSelect"      :  PropTypes.func
		,"value"        :  PropTypes.string 
	} ;
	static getMonthList(str){
		const $handle   =  new $date(str)
		const month     =  $handle.getMonthList()
		let ret         =  [] , o = []
		let first       =  month[0] ;
		let outLen      =  first.$date.getDay() ;
		for (let i = 0; i < outLen ; i++) {
			month.unshift(null)
		}
		_.each( month , (v,i)=>{
			if( parseInt(i/7) === i/7 && i > 0 ){
				ret.push( o )
				o       =  []
			}
			let info    =  v===null?{}:v
			o.push(info)
		} )
		o.length > 0 && ret.push(o) ;
		let day     =  {
			"$date" :  $handle.$date
			,"day"  :  $handle.$date.getDate()
			,"month":  $handle.$date.getMonth() 
			,"year" :  $handle.$date.getFullYear()
			,"format"  :  $handle.format()
		}
		return {"month":ret,day} ;
	}
	constructor(props){
		super( props )
		
	}
	handleForbid(e){
		e.stopPropagation() ;
		e.preventDefault()
	}
	updateDate( value , is_default ){
		const data      =  Index.getMonthList(value) ;
		is_default && (data.default = data.day.format)  ;
		this.setState(data)
	}
	componentWillMount(){
		let {value}     =  this.props ;
		// this.setState({"default":value})
		this.updateDate(value,true) ;
		
	}
	componentWillReceiveProps(props){
		let {value}     =  props ;
		value !== void 0  && this.updateDate(value)
	}
	handleSelectDay(day){
		if( day === null ){
			return ;
		}
		let {onSelect}   =  this.props ;
		this.setState({"default":day.format})
		_.isFunction( onSelect ) && onSelect( day.format ) ;
	}
	handleSelectYear(len){
		let {year,"$date":date}  =  this.state.day 
		year       +=  len
		date.setFullYear(year)
		this.updateDate( $date.format("yyyy-mm-dd" , date) )
		// console.log(  $date.format("yyyy-mm-dd" , date) )
	}
	handleSelectMonth(len){
		let {month,"$date":date}  =  this.state.day 
		month       +=  len
		date.setMonth(month)
		this.updateDate( $date.format("yyyy-mm-dd" , date) )
	}
	render(){
		let {month,day}     =  this.state ;
		return (
			<div className="mu-datepicker" onClick={this.handleForbid.bind(this)}>
			    <div className="mu-datepicker-ctrl">
			        <div className="mu-datepicker-ctrl-line">
			            <i 
			            onClick={this.handleSelectYear.bind(this,-1)} 
			            className="mu-left mu-icon-chevron-left"></i>
			            <span>{day.year}</span>
			            <i 
			            onClick={this.handleSelectYear.bind(this,1)} 
			            className="mu-right mu-icon-chevron-right"></i>
			        </div>
			        <div className="mu-datepicker-ctrl-line">
			            <i onClick={this.handleSelectMonth.bind(this,-1)} className="mu-left mu-icon-chevron-left"></i>
			            <span>{day.month+1}</span>
			            <i onClick={this.handleSelectMonth.bind(this,1)} className="mu-right mu-icon-chevron-right"></i>
			        </div>
			    </div>
			    <div className="mu-datepicker-table">
				    <table>
				    	<tr>
				    		<th>Su</th>
				    		<th>Mo</th>
				    		<th>Tu</th>
				    		<th>We</th>
				    		<th>Th</th>
				    		<th>Fr</th>
				    		<th>Sa</th>
				    	</tr>
				    	{month.map((week)=>{
				    		return (
				    			<tr>{week.map(($day)=>{
				    				let {format}   =  $day ;
				    				let today      =  $day.$date?$day.$date.getDate():"" ;
				    				return (
				    				<td className={`${!format?'disabled':''}${format==this.state.default?" active":""}`} onClick={this.handleSelectDay.bind(this , today?$day:null)}>{today}</td>);
				    			})}
				    			</tr>
				    		);
				    	})}
				    </table>
			    </div>
			</div>
		);
	}
}

export default Index