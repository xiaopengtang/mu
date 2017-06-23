import React,{Component}  from "react" ;
import {Link} from "react-router" ;
import Base from "./base" ;
class Index extends Component{
	constructor( props ){
		super( props )
	}
	render(){
		let {data}     =  this.props.route ;
		console.log( data )
		return (
			<Base title="组件" active="components" className="m-components">
			    <ul>
			    {data.map(d=>{
	    			return (
		    			<li>
		    				<Link to={d.url}>
				    			<h2>{d.title}</h2>
				    		    <p>{d.name}</p>
				    		</Link>
				    	</li>
	    			);
	    		})}
			    </ul>
			</Base>
		);
	}
}
export default Index ;