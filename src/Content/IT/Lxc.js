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

function FlapLinx(props){
	return(
		<>
		<div className="flap-linx">
			<div className="display">
				<img src="debian.png" style={{width:"150px",height:"150px"}}/>
			</div>			
			<hr/>
			<div className="topic-toggle">
				<ol className="topic-toggle-ol">
				{/*A*/}
					<li className="topic-toggle-li">
						<NavLink to="/linuxcommand/home" className="descr">A</NavLink>
						<a className="toggle-switch" id="toggle-a" onClick={function(){
							if (document.getElementById('toggle-a').style.transform=="rotateZ(90deg)"){
								document.getElementById('toggle-a').style.transform="rotateZ(0deg)";
								document.getElementById('lxc-a').hidden=true;

							}else{
								document.getElementById('toggle-a').style.transform="rotateZ(90deg)";
								document.getElementById('lxc-a').hidden=false;

							}
						}}>❱</a>
					</li>
					<ul className="ull" id="lxc-a" hidden={true}>

						<li>apt-get</li>
						<li>alias</li>
					</ul>
				{/*B*/}
					<li className="topic-toggle-li">
						<NavLink to="/linuxcommand/home" className="descr">B</NavLink>
						<a className="toggle-switch" id="toggle-b"  onClick={function(){
							if (document.getElementById('toggle-b').style.transform=="rotateZ(90deg)"){
								document.getElementById('toggle-b').style.transform="rotateZ(0deg)";
								document.getElementById('lxc-b').hidden=true;

							}else{
								document.getElementById('toggle-b').style.transform="rotateZ(90deg)";
								document.getElementById('lxc-b').hidden=false;

							}
						}}>❱</a>
					</li>
					<ul className="ull" id="lxc-b" hidden={true}>
						<li>basename</li>
						<li>bc</li>
					</ul>
				{/*C*/}
					<li className="topic-toggle-li">
						<NavLink to="/linuxcommand/home" className="descr">C</NavLink>
						<a className="toggle-switch" id="toggle-c"  onClick={function(){
							if (document.getElementById('toggle-c').style.transform=="rotateZ(90deg)"){
								document.getElementById('toggle-c').style.transform="rotateZ(0deg)";
								document.getElementById('lxc-c').hidden=true;

							}else{
								document.getElementById('toggle-c').style.transform="rotateZ(90deg)";
								document.getElementById('lxc-c').hidden=false;

							}
						}}>❱</a>
					</li>
					<ul className="ull" id="lxc-c" hidden={true}>
						<li>cat</li>
						<li>cd</li>
						<li>cfdisk</li>
						<li>chdir</li>
						<li>chmod</li>
						<li>clear</li>
						<li>cp</li>
					</ul>
					

				</ol>
			</div>
			
			<Author/>
		</div>
		</>
	);
}

function LinxHome(props){
	return (
		<>
		<div className="">	
			<FlapLinx/>
			<div id="hambure" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-linx')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-linx')[0].style.left="-300px"
            	}
           
            }}>
                <div id="ham-1"></div>
                <div id="ham-2"></div>
                <div id="ham-3"></div>
			</div>
			<Head name="Linux Commands"/>

			<div className="put-in-side-code">
			</div>
		</div>

		</>
	);

}

export {LinxHome};
