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
// 
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
// 
function FlapEth(props){
	return(
		<>
		<div className="flap-eth">
			<div className="display">
				<img src="https://thelinuxpoint.github.io/cyber-s-2.gif" style={{width:"180px",height:"150px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/eth/intro" className="descr"><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/eth/threats" className="descr"><p>Threats and Vulnerability</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/eth/malware" className="descr"><p>Types of Malware</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/eth/generate-malware" className="descr"><p>Generate Malware</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/eth/social-engineering" className="descr"><p>Social Engineering</p></NavLink>
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
// 
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
// 
function EthIntro(props){
	return (
		<>
		<br/>
		<Helmet>
        		<title>Ethical Hacking</title>
        		<meta name="description" content="Learn what is Ethical Hacking" />
	    </Helmet>
		<Head name="A Little Description"/>
		<Mark desc="The information provided in the ethical hacking series is taken from various books to give
		 an optimal knowledge of everthing related to hacking. a user is responsible for misusing the information
		 provided on the website cause we known that knowledge is not good or bad it depends on how a user utilizes it and 
		 always leads in good way or bad way.
		"/>
		<Mark desc="In this complete series of Ethical Hacking we would be leaning various network attacks, web attacks and mobile apps attacks 
		which would require a excellent knowledge of computer systems and programming skills, mainly BASH programming which 
		you can learn here on the website itself.
		"/>
		<Head name="What is Hacking?"/>
		<Mark desc="Hacking in the field of computer security refers to exploiting system vulnerabilities and
		compromising security controls to gain unauthorized or inappropriate access to system
		resources. tlp:br Hacking can be done to steal, pilfer, or redistribute intellectual
		property, thus leading to business loss. tlp:br tlp:br Hacking on computer networks is generally done using scripts or other network programming.
		Network hacking techniques include creating viruses and worms, performing denial-of-service
		(DoS) attacks, establishing unauthorized remote access connections to a device using Trojans or
		backdoors, creating botnets, packet sniffing, phishing, and password cracking.
		"/>
		<Head name="Requirements"/>

		<br/>


		<Navigator left="" right=""/>
		</>
	);
}
// 
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
// 
function EthMalware(props){
	return (
	
		<>
			<Helmet>
        		<title>Types of Malware</title>
        		<meta name="description" content="learn various types of malware around us" />
	    	</Helmet>
			<br/>
			<Head name="What is Malware"/>
			
		</>
	);
}
// 
export { 
	EthIntro, 
	HomeEth, 
	EthReconTools,
	EthMalware

};






