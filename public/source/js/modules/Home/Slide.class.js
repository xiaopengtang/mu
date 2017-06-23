import React,{Component} from "react" ;
import {Slide,Item} from "../../components/slide.component"
import $ from "jquery" ;

class Slider extends Component{
	constructor( props ){
		super( props )
	}

	render(){
		let url1       =  "//m.tuniucdn.com/fb2/t1/G2/M00/DD/09/Cii-TliES-mICFcxAAaMuzOFOKQAAG3wwHrQ_AABozT185.png"
		,   url2       =  "//m.tuniucdn.com/fb2/t1/G2/M00/C0/33/Cii-T1h3JkeIQz2OAAHo1JCTtFoAAGr8wPqkKMAAejs907.png"
		,   url3       =  "//m.tuniucdn.com/fb2/t1/G2/M00/DD/0B/Cii-T1iETUOIAjROAAVkNbQhSNkAAG3xQHjd7gABWRN642.png" 
		return (
			<div className="xp-slider">
			    <h4>这是slide</h4>
			    <div style={{"width":"7.5rem","height":"2.5rem"}}>
				    <Slide>
				        <Item title="测试测试测试测试测试测试">
				       	    <a>
				       	    	<img src={url1} width="250" height="250"/>
				       	    </a>
				       	    <a>
				       	    	<img src={url1} width="250" height="250"/>
				       	    </a>
				       	    <a>
				       	    	<img src={url1} width="250" height="250"/>
				       	    </a>
				       	</Item>
				       	<Item title="测试测试测试测试测试测试">
				       	    <a>
				       	    	<img src={url2} width="250" height="250"/>
				       	    </a>
				       	    <a>
				       	    	<img src={url2} width="250" height="250"/>
				       	    </a>
				       	    <a>
				       	    	<img src={url2} width="250" height="250"/>
				       	    </a>
				       	</Item>
				       	<Item title="测试测试测试测试测试测试">
				       	    <a>
				       	    	<img src={url3} width="250" height="250"/>
				       	    </a>
				       	    <a>
				       	    	<img src={url3} width="250" height="250"/>
				       	    </a>
				       	    <a>
				       	    	<img src={url3} width="250" height="250"/>
				       	    </a>
				       	</Item>
				       	<Item title="测试测试测试测试测试测试">
				       	    <a>
				       	    	<img src={url2} width="250" height="250"/>
				       	    </a>
				       	    <a>
				       	    	<img src={url2} width="250" height="250"/>
				       	    </a>
				       	    <a>
				       	    	<img src={url2} width="250" height="250"/>
				       	    </a>
				       	</Item>
				    </Slide>
			    </div>
			</div>
		);
	}
}
export default Slider