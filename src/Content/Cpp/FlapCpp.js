import React from 'react';
import {NavLink} from "react-router-dom";
function Author(){
    return(
        <div  style={{color:"white",fontSize:"17px",display:"flex",justifyContent:"space-between",padding:"10px"}}>
            <div draggable={false} className="" title="Visit Youtube Channel" onClick={function(){
                     var x = document.createElement('a');
                     x.href="https://www.youtube.com/channel/UCVYclxop0utX10SW0kOK9Ig";
                     x.click();}}>
                <img src="https://thelinuxpoint.github.io/youtube.dark.min.svg" alt="youtube" style={{'height':'30px','width':'30px'}}/>
            </div>
            <div draggable={false} className="" title="Visit Github" onClick={function(){
                    var x = document.createElement('a');
                     x.href="https://github.com/thelinuxpoint";
                     x.click();}}>
                <img src="https://thelinuxpoint.github.io/github.dark.min.svg" alt="github" style={{'height':'30px','width':'30px'}}/>
            </div>
        </div>
    );
}
function slideIN(){
	if(window.innerHeight>window.innerWidth){
		document.getElementsByClassName('flap-cpp')[0].style.left="-300px";
		if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
            	}
	}
}
function FlapCpp(props){
	
	return(
		<>
		<div className="flap-cpp">
			<div className="display">
				<img src="https://thelinuxpoint.github.io/cpp.png" style={{width:"200px",height:"180px"}}/>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/cpp/intro" onClick={slideIN}  className="descr"><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/cpp/keywords" onClick={slideIN}  className="descr"><p>Keywords</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<p>Syntax</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Data Types</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Pointers and Array</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Conditional</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Function</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Struct</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Enums</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Classes</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Operator Overloading</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Literals</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Generic</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Concepts</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Macros</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Misellaneous</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Standard Library</p>
			</div>
			<hr/>
			<Author/>
		</div>
		</>
	);
}

export default FlapCpp;
