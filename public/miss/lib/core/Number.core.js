export default {
	mul( arg1 , arg2 ){
		let m  =  0, s1 =arg1.toString() , s2=arg2.toString() ; 
	    try{    m     +=   s1.split(".")[1].length   }catch(e){} 
	    try{    m     +=   s2.split(".")[1].length   }catch(e){} 
	    return  Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m) 
	}
	,add(arg1,arg2){ 
	    let r1 , r2 , m ; 
	    try{   r1  =  arg1.toString().split(".")[1].length }catch(e){r1=0} 
	    try{   r2  =  arg2.toString().split(".")[1].length }catch(e){r2=0} 
	    m      =  Math.pow(10,Math.max(r1,r2)) 
	    return (arg1*m+arg2*m)/m  
	} 
	,div(a, b) {
	    let c, d, e = 0,
	        f = 0;
	    try {
	        e = a.toString().split(".")[1].length;
	    } catch (g) {}
	    try {
	        f = b.toString().split(".")[1].length;
	    } catch (g) {}
	    return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), c / d * Math.pow(10, f - e);
	}
}