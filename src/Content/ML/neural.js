import React from 'react';
import {NavLink} from "react-router-dom";
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
import ReactEmbedGist from 'react-embed-gist';
import Shell from "../../Components/Shell";
import MathJax from 'react-mathjax';
import { Helmet } from 'react-helmet';

function slideIN(){
	if(window.innerHeight>window.innerWidth){
		document.getElementsByClassName('flap-neural')[0].style.left="-300px";
		if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";

            	}else if(document.getElementById("hamburx")){
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
                    x.click();
                }}>
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

function FlapNeural(props){
	return(
		<>
		<div className="flap-neural">
			<div className="display">
				<img src="https://thelinuxpoint.github.io/models.svg" style={{width:"200px",height:"200px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/machine/neural/introduction" className="descr" ><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/machine/neural/perceptron" className="descr" ><p>Perceptron</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/machine/neural/activation" className="descr" ><p>Activation Function</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/machine/neural/dimension" className="descr" ><p>Dimension Reduction</p></NavLink>
			</div>
			<hr/>
			<Author/>
		</div>
		</>
	);
}
function HomeNeural(props){
	window.scrollTo(0,0);
	return(
		<>
			<FlapNeural/>
			<div id="hamburx" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-neural')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-neural')[0].style.left="-300px"
            	}
           
            }}>
                <div id="ham-1"></div>
                <div id="ham-2"></div>
                <div id="ham-3"></div>
			</div>
		</>
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
function NeuralIntro(props){
	window.scrollTo(0,0);
	return(
		<>
			<br/>
			<Helmet>
        		<title>Neural Networks</title>
        		<meta name="description" content="Learn basics about neural networks"/>
	      	</Helmet>
	      	
			<Head name="Introduction"/>
			<Mark desc=""/>
			<Head name="The Perceptron"/>

			<br/>
			<Navigator left="/" right="/machine/algo/linear"/>

		</>
	);
}
function NeuralAct(props){
	window.scrollTo(0,0);
	return(
		<>
			<br/>
			<Helmet>
        		<title>Activation Functions - Neural Network</title>
        		<meta name="description" content="Learn about activation functions" />
	      	</Helmet>
			<Head name="Sigmoid"/>
			<Mark desc=""/>


			<br/>
			<Navigator left="/" right="/machine/algo/linear"/>

		</>
	);
}
function NeuralDim(props){
	window.scrollTo(0,0);
	return(
		<>
			<br/>
			<Helmet>
        		<title>Dimension Reduction - Neural Network</title>
        		<meta name="description" content="Learn about dimension reduction" />
	      	</Helmet>
			<Head name="SVD (Singular Value Decomposition)"/>
			<Mark desc="⌾ How it Works?"/>


			<Head name="PCA (Principle Component Analysis)"/>
			<Mark desc="PCA is a transformation procedure that converts a data matrix with possibly correlated features into a set of linearly uncorrelated variables called principal components.
				As there are as many principal components as there are variables in the data, principal components are constructed in such a manner that the first principal component accounts for the largest possible variance
			"/>

			<br/>
			<div align="center"><img style={{borderRadius:"10px",filter:"invert(0.1)"}} src="https://thelinuxpoint.github.io/pca.gif" className="put-in-side-code"/></div>
			
			<br/>
			<Navigator left="/" right="/machine/algo/linear"/>

		</>
	);
}
export {HomeNeural,NeuralIntro,NeuralDim,NeuralAct}
