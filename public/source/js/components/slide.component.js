import React,{Component,cloneElement} from "react" ;
import DOM  from "react-dom" ;
import style from "./slide.component.css" ;
import addons,{classSet} from "react-addons" ;

class Slide extends Component{
	constructor( props ){
		super( props ) ;
		this.props.children.length === void 0 && (this.props.children = [this.props.children]);
		this.length        =  this.props.children.length
		this.state         =  {
			"activeIndex"  :  this.activeIndex === void 0 ? 0 : this.activeIndex
		    ,"theme"       :  this.props.theme || "default"//"default"
		    ,"time"        :  this.props.time || 3000
		    ,"direction"   :  "left"
		    ,"switch"      :  this.props.switch
		}
		
		this.renderItem    =  this.renderItem.bind(this)
		this.moveEnter     =  this.moveEnter.bind(this)
		this.moveOut       =  this.moveOut.bind( this )
		this.next          =  this.next.bind(this)
		this.prev          =  this.prev.bind(this)
		this.touch         =  this.touch.bind(this)
		this.ctrlSkip      =  this.ctrlSkip.bind(this)
		console.log( this.props.children.length )
	}
	ctrlSkip(e){
		let index          =  e.currentTarget.getAttribute("data-index") ;
		this.skip( parseInt( index ) )
	}

	touch(){
		console.log( "this is touch" )
	}
	componentDidMount(){
		this.start()
	}
	start(){
		let _    =  this
		this.timer         =  setInterval( ()=>{ 
			_[_.state.direction.toLowerCase()=="left"?"next":"prev"]() ;
			typeof _.state.switch == "function" && _.state.switch(_.state.activeIndex)
		} , this.state.time )
	}
	next(){
		let index      =  this.state.activeIndex
		index++
		index          =  this.length - 1 < index ? 0 : index ;
		this.setState( { "activeIndex" : index } )
	}

	prev(){
		let index      =  this.state.activeIndex
		index--
		index          =  index < 0 ? (this.length - 1) : index
		this.setState( { "activeIndex" : index , "direction" : "right" } )
	}

	pause(){
		clearInterval( this.timer ) ;
	}

	moveEnter(e){
		this.pause();
	}
	moveOut(e){
		this.start()
	}
	getActiveIndex(){
		return this.state.activeIndex === void 0 ?0:this.state.activeIndex
	}

	renderItem( node , i ){
		let isActive       =  this.getActiveIndex() == i
		return cloneElement( node , {
			"index"          :  i
			,"curIndex"      :  this.state.activeIndex
			,"num"           :  this.length
			,"direction"     :  this.state.direction
		} )
	}
	skip(i){
		this.setState({"activeIndex":i})
	}

	themeDefault(){
		return (
			<div className={style["ui-slide-ctrl"]}>
			{this.props.children.map( ( n , i )=>{
				let classes       =  {}
				classes[style["active"]]      =  i === this.state.activeIndex
				classes           =  classSet( classes )
				return <i className={classes} data-index={i} onClick={this.ctrlSkip}></i>
			} )}
			</div>
		) ;
	}

	themeTitle(){
		return (
			<div className={style["ui-slide-title"]}>
				<div className={style["ui-slide-title-back"]}></div>
				<p className={style["ui-slide-title-body"]}></p>
			</div>
		) ;
	}

	loadCtrl(){
		let ret , _this = this
		switch( this.state.theme.toLowerCase() ){
			case "default":
			    ret        =  _this.themeDefault()
			break ;
			case "title":
			    ret        =  _this.themeTitle()
			break ;
		}

		return ret
	}

	render(){
		return (
			<div className={style["ui-slide"]} 
			onMouseOver={this.moveEnter}
			onMouseOut={this.moveOut}
			onTouchStart={this.touch}
			onTouchMove={this.touch}
			onTouchEnd={this.touch}
			>
			<div className={style["ui-slide-prev"]}>
                <i onClick={this.prev}></i>
			</div>
			{this.props.children.map( this.renderItem )}
			<div className={style["ui-slide-next"]}>
			    <i onClick={this.next}></i>
			</div>
			{this.loadCtrl()}
			</div>
		);
	}
}

class Item extends Component{
	constructor( props ){
		super( props )
	}
	componentDidUpdate(){
		console.log( arguments )
	}
	render(){
		// console.log( this.props.activeIndex )
		let classes       =  {}
		let next          =  this.props.curIndex + 1 === this.props.num?0:( this.props.curIndex+1 )
		let prev          =  this.props.curIndex === 0?(this.props.num-1):(this.props.curIndex-1)
		classes[style["prev"]]       =  prev  === this.props.index
		classes[style["next"]]       =  next  === this.props.index
		classes[style["ui-slide-item"]]   =  true
		classes[style["active"]]     =  this.props.index === this.props.curIndex //this.props.isActive
		classes               =  classSet( classes )
		// this.prevActionIndex          =  this.props.curIndex
		return (
			<div className={classes}>
				{this.props.children}
				{function(title){ 
					return title?(
					<div className={style["ui-slide-title"]}>
						<div className={style["ui-slide-title-back"]}></div>
						<p className={style["ui-slide-title-body"]}>{title}</p>
					</div>):"" ;
				}(this.props.title)}
			</div>
		);
	}
}

export {Slide,Item} ;