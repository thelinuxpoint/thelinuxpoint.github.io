import React from 'react';
import {NavLink} from "react-router-dom";
import ReactEmbedGist from 'react-embed-gist';

import Mark from "../../Components/Markdown";
import FLapJava from "./FlapJava";
import Shell from "../../Components/Shell";

function HomeJava(props){
	return(
		<>
		<div className="">
			<FLapJava/>
			<div id="hambure" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-java')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-java')[0].style.left="-300px"
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

export default HomeJava;
