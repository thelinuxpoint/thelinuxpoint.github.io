import React from 'react';
import {NavLink} from "react-router-dom";
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
import ReactEmbedGist from 'react-embed-gist';
import Shell from "../../Components/Shell";
import Table from "../../Components/Table";
import { Helmet } from 'react-helmet';

function Navigator(props){
	return(
		<>
			<div className="pg-nav put-in-side-code">
				<div className="pg-nav-in">
					<NavLink to={props.left} className="descr" ><button id="first-btn">❱</button></NavLink>
				</div>
				<div className="pg-nav-in">
					<NavLink to={props.right} className="descr" ><button>❱</button></NavLink>
				</div>
			</div>
		</>
	);
}
//
export default function X86Intro(){
	window.scrollTo(0,0)
	return(
		<>
			<Helmet>
        		<title>x86 Introduction & Fundamentals</title>
        		<meta name="description" content="Learn basics about Assembly Programming" />
	      	</Helmet>
			<Head name="A Brief Introduction"/>
			<Mark desc="The x86 processor type first appeared in the Intel 80386 processor, and continued with processors such as the Intel Pentium, Intel Pentium 4, Intel Pentium Core Duo, and the Advanced Micro Devices (AMD) Athlon. tlp:br so therefore we would be focusing on intels 80386 processor so we can have a idea of modern cpu's"/>
			<br/>
			<Navigator left="/cpp/intro/" right="/cpp/keywords"/>
		</>
	);
}
