import React from 'react';
import {NavLink} from "react-router-dom";
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
import { Helmet } from 'react-helmet';

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
//##########################################

function slideIN(){
	if(window.innerHeight>window.innerWidth){
		document.getElementsByClassName('flap-sold')[0].style.left="-300px";
		let c = document.getElementById("hamburx");
        c.id="hambure";
	}
}

//##########################################

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



function FlapSol(props){
	return(
		<>
		<div className="flap-sold">
			<div className="display">
				<img src="sol.svg" style={{width:"150px",height:"150px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/web3/solidity/intro" className="descr"><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/web3/solidity/types" className="descr"><p>Types</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/web3/solidity/literals" className="descr"><p>Literals</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/web3/solidity/function" className="descr"><p>Function</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/web3/solidity/contract" className="descr"><p>Contracts</p></NavLink>
			</div>
			<hr/>
			<Author/>
		</div>
		</>
	);
}

function HomeSol(){
	return(
		<>
			<FlapSol/>
			<div id="hambure" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-sold')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-sold')[0].style.left="-300px"
            	}
           
            }}>
                <div id="ham-1"></div>
                <div id="ham-2"></div>
                <div id="ham-3"></div>
			</div>
		</>
	);
}

function SolIntro(){
	return(
		<>
			<Helmet>
        		<title>Solidity Introduction</title>
        		<meta name="description" content="Learn basics about Solidity programming" />
	      	</Helmet>
			<Head name="Introduction to Solidity"/>
			<Mark desc=""/>
			<br/>
			<Navigator left="/web3/solidity/intro" right="/web3/solidity/types"/>
		</>
	);
}

function SolTypes(){
	return(
		<>
			<Helmet>
        		<title>Solidity Types</title>
        		<meta name="description" content="types in solidity" />
	      	</Helmet>
{/*Start*/}
			<Head name="Types"/>
			<Mark desc="Solidity is a statically typed language, which means that the type of each variable (state and local) needs to be specified. Solidity provides several elementary types which can be combined to form complex types.
			  tlp:br tlp:br The concept of “undefined” or “null” values does not exist in Solidity, but newly 
			  declared variables always have a default value dependent on its type. 
			  To handle any unexpected values, you should use the revert function to revert the 
			  whole transaction, or return a tuple with a second bool value denoting success."/>
			<Head name="Booleans"/>
			<Mark desc="tlp:org bool : The possible values are constants tlp:cyan true and tlp:cyan false. tlp:br tlp:br 
			Operators
			"/>
			<Head name="Integers"/>
			<Mark desc="tlp:org int : Signed integer of variable size from tlp:cyan int8 to tlp:cyan int256 of step size = tlp:violet 8 tlp:br
			tlp:org uint : Unsigned integer of variable size from tlp:cyan uint8 to tlp:cyan uint256 of step size = tlp:violet 8 tlp:br
			tlp:br The alias for tlp:cyan int is tlp:cyan int256 and for tlp:cyan uint is tlp:cyan uint256
			"/>
			<Head name="Address"/>


{/*End*/}
			<br/>
			<Navigator left="/web3/solidity/intro" right="/web3/solidity/function"/>

		</>
	);
}

function SolFunc(){
	return(
		<>
			<Helmet>
        		<title>Solidity Functions</title>
        		<meta name="description" content="declearing function in solidity" />
	      	</Helmet>
			<Head name="Functions"/>
			<Mark desc=""/>
			<br/>
			<Navigator left="/web3/solidity/types" right="/web3/solidity/contract"/>
		</>
	);
}

function SolContract(){
	return(
		<>
			<Helmet>
        		<title>Solidity Smart Contracts</title>
        		<meta name="description" content="smart contract" />
	      	</Helmet>
			<Head name="Smart Contracts"/>
			<Mark desc=""/>
			<br/>
			<Navigator left="/web3/solidity/function" right="/web3/solidity/intro"/>
		</>
	);
}

function SolLiteral(){
	return(
		<>
			<Helmet>
        		<title>Solidity Literals</title>
        		<meta name="description" content="literals in solidity" />
	      	</Helmet>
			<Head name="Literals"/>
			<Mark desc=""/>
			<br/>
			<Navigator left="/web3/solidity/types" right="/web3/solidity/function"/>
		</>
	);
}

export { HomeSol,SolIntro,SolTypes,SolFunc,SolContract,SolLiteral };
