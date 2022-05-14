import React from 'react';
import {NavLink} from "react-router-dom";

function Author(){
    return(
        <div  style={{color:"white",fontSize:"17px",display:"flex",justifyContent:"space-between",padding:"10px"}}>
            <div draggable={false} className="" title="Visit Youtube Channel" onClick={function(){
                     var x = document.createElement('a');
                     x.href="https://www.youtube.com/channel/UCVYclxop0utX10SW0kOK9Ig";
                     x.click();}}>
                <img src="youtube.dark.min.svg" alt="youtube" style={{'height':'30px','width':'30px'}}/>
            </div>
            <div draggable={false} className="" title="Visit Github" onClick={function(){
                    var x = document.createElement('a');
                     x.href="https://github.com/thelinuxpoint";
                     x.click();}}>
                <img src="github.dark.min.svg" alt="github" style={{'height':'30px','width':'30px'}}/>
            </div>
        </div>
    );
}
function FlapJava(props){
	return(
		<>
		<div className="flap-java">
			<div className="display">
				<img src="java.png" style={{width:"150px",height:"150px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<p>Introduction</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Basics Syntax</p>
			</div>			
			
			<hr/>
			<Author/>
		</div>
		</>
	);
}

export default FlapJava;
