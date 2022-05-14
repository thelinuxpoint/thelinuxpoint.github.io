import React from 'react';
import {NavLink} from "react-router-dom";
import Card from "../../Components/Card";
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
import ReactEmbedGist from 'react-embed-gist';
import Shell from "../../Components/Shell";
import Table from "../../Components/Table";
import { Helmet } from 'react-helmet';

function slideIN(){
	if(window.innerHeight>window.innerWidth){
		document.getElementsByClassName('flap-eth')[0].style.left="-300px";
		if(document.getElementById("hambure")){
              let c = document.getElementById("hambure");
              c.id="hamburx";

        }else if(document.getElementById("hamburx")){
             let c = document.getElementById("hamburx");
             c.id="hambure";
        }
	}
}

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
function FlapEth(props){
	return(
		<>
		<div className="flap-eth">
			<div className="display">
				<img src="cyber-s-2.gif" style={{width:"180px",height:"150px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/eth/intro" className="descr"><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/eth/intro" className="descr"><p>Threats and Vulnerability</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/eth/intro" className="descr"><p>Password Cracking</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/eth/intro" className="descr"><p>Social Engineering</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/eth/recon/tools" className="descr"><p>Network Level Attack</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/eth/recon/tools" className="descr"><p>Web</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/eth/recon/tools" className="descr"><p>Reconnaissance Tools</p></NavLink>
			</div>
			<hr/>
			<Author/>
		</div>
		</>
	);
}

function HomeEth(props){
	return (
		<div>
			<FlapEth/>
			
			<div id="hamburx" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-eth')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-eth')[0].style.left="-300px"
            	}
           
            }}>
                <div id="ham-1"></div>
                <div id="ham-2"></div>
                <div id="ham-3"></div>
			</div>
		</div>
	);
}

function EthIntro(props){
	return (
		<><br/>
		<Helmet>
        		<title>Ethical Hacking</title>
        		<meta name="description" content="Learn what is Ethical Hacking" />
	    </Helmet>
		<Head name="Ethical Haking"/>
		
		</>
	);
}

function EthReconTools(props){
	return (
	
		<>
		<Helmet>
        		<title>Reconnaissance Tools</title>
        		<meta name="description" content="Learn what are tools related to reconnaissance" />
	    </Helmet>
		<br/>
		
		<Head name="Reconnaissance Tools"/>
		<div className="card-holder">
			<Card topic="nmap" desc="nmap is a network scanning tool used for scanning ports on the target system."/>	
			<Card topic="recon-ng" desc="recon-ng"/>	
			<Card topic="spiderfoot" desc="spiderfoot"/>
			<Card topic="whois" desc="WHOIS is a query and response protocol that is widely used for querying databases that store the registered users or assignees of an Internet resource, such as a domain name, an IP address block or an autonomous system, but is also used for a wider range of other information."/>
			<Card topic="nslookup" desc="nslookup command helps to get information about a particular domain name."/>
			<Card topic="dig" desc=""/>
		</div>
		</>
	);
}
function EthTV(props){
	return (
	
		<>
		<Helmet>
        		<title>Reconnaissance Tools</title>
        		<meta name="description" content="Learn what are tools related to reconnaissance" />
	    </Helmet>
		<br/>
		<Head name=""/>
		</>
	);
}
export {EthIntro,HomeEth,EthReconTools};






