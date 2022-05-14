import React from 'react';
import {NavLink} from "react-router-dom";
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
import ReactEmbedGist from 'react-embed-gist';
import Shell from "../../Components/Shell";
import Table from "../../Components/Table";

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


function FlapBatch(props){
	return(
		<>
		<div className="flap-batch">
			<div className="display">
				<img src="https://thelinuxpoint.github.io/command-line.png" style={{width:"180px",height:"150px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink to="/batch/intro" className="descr"><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/batch/concept" className="descr"><p>Concepts</p></NavLink>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink to="/batch/variable" className="descr"><p>Declare Variable</p></NavLink>
			</div>			
			<hr/>
			
			<Author/>
		</div>
		</>
	);
}

function HomeBatch(){
	return(
		<>
		<div className="">
			<FlapBatch/>
			<div id="hamburx" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-batch')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-batch')[0].style.left="-300px"
            	}
           
            }}>
                <div id="ham-1"></div>
                <div id="ham-2"></div>
                <div id="ham-3"></div>
			</div>
			
		</div>

		</>
	);
}


function BatchIntro(){
	return(
		<>
			<Head name="Introduction"/>
			<Mark desc="As a Linux user i don't use Batch Programming a lot but sometimes
				it can be usefull ... maybe, cause most of the people today use Windows as their primary operating system
				tlp:br Also if you are a Ethical Hacker you need to know batch scripting since you will not always be on a Linux System.
			"/>
			
			
		</>
	);
}

function BatchVar(){
	return(
		<>
			<Head name=""/>
			<Mark desc="you can easily create variable using the tlp:red SET command"/>
		</>
	);
}

export {HomeBatch,BatchIntro,BatchVar};
