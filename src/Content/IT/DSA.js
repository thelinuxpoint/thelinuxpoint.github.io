import React from 'react';
import {NavLink} from "react-router-dom";
import ReactEmbedGist from 'react-embed-gist';

import Mark from "../../Components/Markdown";
import FLapRuby from "./FlapRuby";
import Shell from "../../Components/Shell";
import Head from "../../Components/Header";

function FlapDsa(props){
	return(
		<>
		<div className="flap-dsa">
			<div className="display">
				<img src="shell.png" style={{width:"150px",height:"150px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink to="/dsa/intro" className="descr"><p>Big O</p></NavLink>
			</div>
			<hr/>
			<Author/>
		</div>
		</>
	);
}

function DsaIntro(props){
	return(
		



	);
}


