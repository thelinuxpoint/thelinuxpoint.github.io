import React from 'react';
import {NavLink} from "react-router-dom";
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
import ReactEmbedGist from 'react-embed-gist';
import Shell from "../../Components/Shell";

function slideIN(){
	if(window.innerHeight>window.innerWidth){
		document.getElementsByClassName('flap-prob')[0].style.left="-300px";
		if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";

         		}
            	else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
         }
	}
}


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
function FlapProb(props){
	return(
		<>
		<div className="flap-prob">
			<div className="display">
				<img src="https://thelinuxpoint.github.io/prob.png" style={{width:"200px",height:"180px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/machine/statistics/intro" className="descr"><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/machine/statistics/functions" className="descr"><p>Formula & Anotations</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<p>Bayes Theorem</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Permutation</p>
			</div>
			<hr/>
			<Author/>
		</div>
		</>
	);
}
function HomeProb(props){
	return(
		<>
		<div className="">
			
			<FlapProb/>
			<div id="hamburx" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-prob')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-prob')[0].style.left="-300px"
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
function ProbIntro(props){
	return(
		<>
			<Head id="" name="Intro to Probablity"/>
			<Mark desc="Probability is the branch of mathematics concerning numerical descriptions of how likely an event is to occur, or how likely it is that a proposition is true. The probability of an event is a number between 0 and 1, where, roughly speaking, 0 indicates impossibility of the event and 1 indicates certainty. The higher the probability of an event, the more likely it is that the event will occur."/>
			<Mark desc="These concepts have been given an axiomatic mathematical formalization in probability theory, which is used widely in areas of study such as statistics, mathematics, science, finance, gambling, artificial intelligence, machine learning, computer science."/>
			
			<Head name="Population and Samples"/>
			<Mark desc="Suppose we are given a task to do some survey on some topic. we unfortunately can't ask every person in the population. Instead, we take a random sample from the population, and use the resulting sample to learn something, or make an inference, about the population:"/>
			<img className="put-in-side-code" src="/text5687.png" />
			
			<Head name="Sample Space"/>
			<Mark desc="
    		The sample space (or outcome space), denoted by S , is the collection of all 
    		possible outcomes of a random study."/>

    		<Head name="Data Types"/>
    		<Mark desc="❱ Discrete tlp:br tlp:br ❱ Continuous"/>
			<br/>
    		<Navigator left="/machine/algo/" right="/machine/algo/supervised"/>
		</>
	);
}
function ProbFunc(props){
	return(
		<>
			<Head name="General Probability Equations"/>	
			<Mark desc="Probability of the union of two events: tlp:br tlp:br ❱ P(A∪B) = P(A) + P(B) − P(A∩B) tlp:br tlp:br Probablity of A when B is given: tlp:br tlp:br ❱ P(A|B) = P(A∩B)/P(B)"/>	
			<Head name="Discrete Functions"/>
			<Mark desc="⌾ Binomial Distribution tlp:br tlp:br let n be the number of time the event happen and p and q be the probablity of success and failure
			then probablity that a event happen x time is given by: tlp:br tlp:br ❱  P(X = x) = n!/(x!*(n-x)!) * p^x * q^(n-x) tlp:br tlp:br Variance = np(1-p) tlp:br Standard Deviation = sqrt(Var) tlp:br Mean = np 
			
			"/>	
			<Mark desc="⌾ Poissons Distribution"/>
			<Mark desc="⌾ Normal Distribution"/>
			
			<Head name="Continuous Functions"/>
			<Mark desc="⌾ Exponential Distribution"/>
			<Mark desc="⌾ Gamma Distribution"/>
			<Mark desc="⌾ Chi-Square Distribution"/>
		</>
	);
}


export {HomeProb,ProbIntro,ProbFunc}
