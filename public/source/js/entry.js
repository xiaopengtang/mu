import React,{Component} from "react" ;
import DOM,{render}   from "react-dom"
import Mu from "miss.react" ;
let {TouchDel,Slider,SliderItem}         =  Mu.Components ;
let {Components,Plugins,"handle":$handle}     =  Mu ;
let imgArr         =  [
"//m.tuniucdn.com/fb2/t1/G1/M00/74/C7/Cii-U1ialMSIYLD2AEzIFjjPXgoAAHWlACeZ34ATMgu194_w640_h320_c1_t0.JPG"
,"//m.tuniucdn.com/fb2/t1/G2/M00/07/7E/Cii-T1ialOOIcgGSAEWSj7DMmUQAAHDgwHCFaAARZKn885_w640_h320_c1_t0.JPG"
,"//m.tuniucdn.com/fb2/t1/G2/M00/D5/E4/Cii-TFgR9NeIQOtEAEggl0_P3F8AADy_gGT_SgASCCv469_w640_h320_c1_t0.jpg"
]
class Index extends Component{
	$loading        =  $handle("components:Loading")
	constructor( props ){
		super( props )
		this.$loading.render({"active":true}) 
	}
	componentDidMount(){
		/*setTimeout( ()=>{*/this.$loading.render({"active":false}) //} ,  1000 )
	}
	render(){
		let imgUrl     =  "//m.tuniucdn.com/filebroker/cdn/olb/2e/a6/2ea6c716ff4bf13a011261f2fbc24000_w450_h300_c1_t0_w640_h320_c1_t0.jpg"
		return (
			<Plugins.Pager>
				<Plugins.Pager.Item title="首页">
				    <Components.Collapse>
				    	<Components.Collapse.Item title="标题">测试</Components.Collapse.Item>
				    	<Components.Collapse.Item title="标题">测试</Components.Collapse.Item>
				    </Components.Collapse>
				    <Components.Tabs>
				    	<Components.Tabs.Item title="标题1"><div style={{"background-color":"red","height":"1rem"}}></div></Components.Tabs.Item>
				    	<Components.Tabs.Item title="标题2"><div style={{"background-color":"yellow","height":"1rem"}}></div></Components.Tabs.Item>
				    	<Components.Tabs.Item title="标题3"><div style={{"background-color":"gray","height":"1rem"}}></div></Components.Tabs.Item>
				    </Components.Tabs>
				    <Components.Slide>
				    	<Components.Slide.Item label="测试" src={imgUrl}>
				    		<img src={imgUrl}/>
				    	</Components.Slide.Item>
				    	<Components.Slide.Item label="测试" src={imgUrl}>
				    		<img src={imgUrl}/>
				    	</Components.Slide.Item>
				    	<Components.Slide.Item label="测试" src={imgUrl}>
				    		<img src={imgUrl}/>
				    	</Components.Slide.Item>
				    	<Components.Slide.Item label="测试" src={imgUrl}>
				    		<img src={imgUrl}/>
				    	</Components.Slide.Item>
				    </Components.Slide>
				    <Components.Swiper theme="img">
				    {imgArr.map( (src)=>{
				    	return (<Components.Swiper.Item resource={src}></Components.Swiper.Item>);
				    } )}
				    </Components.Swiper>
				    {/*<Components.HandLock></Components.HandLock>*/}
				</Plugins.Pager.Item>
			</Plugins.Pager>
		);
	}
}
let Body    =  document.querySelector(".xp-page")

DOM.render( <Index/> , Body );