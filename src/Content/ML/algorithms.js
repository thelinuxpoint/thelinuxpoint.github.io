import React from 'react';
import {NavLink} from "react-router-dom";
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
import ReactEmbedGist from 'react-embed-gist';
import Shell from "../../Components/Shell";
import MathJax from 'react-mathjax';
function slideIN(){
	if(window.innerHeight>window.innerWidth){
		document.getElementsByClassName('flap-mac-al')[0].style.left="-300px";
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

function FlapMac(props){
	return(
		<>
		<div className="flap-mac-al">
			<div className="display">
				<img src="https://thelinuxpoint.github.io/rb.png" style={{width:"200px",height:"200px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/machine/algo/introduction" className="descr" ><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/machine/algo/linear" className="descr"><p>Linear Regression</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/machine/algo/decision" className="descr" ><p>Decision Tree</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/machine/algo/svm" className="descr" ><p>SVM</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/machine/algo/svm" className="descr" ><p>K-nearest neighbours</p></NavLink>
			</div>
			<hr/>
			<Author/>
		</div>
		</>
	);
}
function HomeMac(props){
	window.scrollTo(0,0);
	return(
		<>
			<FlapMac/>
			<div id="hamburx" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-mac-al')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-mac-al')[0].style.left="-300px"
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
function MacAlIntro(props){
	window.scrollTo(0,0);
	return(
		<>
			<Head name="Introduction"/>
			<Mark desc="Machine learning is a subfield of artificial intelligence (AI). The goal of machine learning generally is to understand the structure of data and fit that data into models that can be understood and utilized by people.
			tlp:br tlp:br Although machine learning is a field within computer science, it differs from traditional computational approaches. In traditional computing, algorithms are sets of explicitly programmed instructions used by computers to calculate or problem solve. Machine learning algorithms instead allow for computers to train on data inputs and use statistical analysis in order to output values that fall within a specific range. Because of this, machine learning facilitates computers in building models from sample data in order to automate decision-making processes based on data inputs.
			tlp:br tlp:br Any technology user today has benefitted from machine learning. Facial recognition technology allows social media platforms to help users tag and share photos of friends. Optical character recognition (OCR) technology converts images of text into movable type. Recommendation engines, powered by machine learning, suggest what movies or television shows to watch next based on user preferences. Self-driving cars that rely on machine learning to navigate may soon be available to consumers.
			tlp:br tlp:br Machine learning is a continuously developing field. Because of this, there are some considerations to keep in mind as you work with machine learning methodologies, or analyze the impact of machine learning processes."/>
			<Head name="Machine Learning Methods"/>
			<div align="center"><img style={{borderRadius:"10px",filter:"invert(0.8)"}} src="https://thelinuxpoint.github.io//mll.jpg" className="put-in-side-code"/></div>

			<Mark desc="The most widely adopted machine learning methods are supervised learning which trains algorithms based on example input and output data that is labeled by humans, and unsupervised learning which provides the algorithm with no labeled data in order to allow it to find structure within its input data. Let’s explore these methods in more detail."/>
			<Head name="Supervised Learning" />
			<Mark desc="In supervised learning, the training data you feed to the algorithm includes the desired
			solutions, called labels. A label is the thing we're predicting. 
			The label could be the future price of wheat, the kind of animal shown in a picture, the meaning of 
			an audio clip, or just about anything."/>
			<ul className="put-in-side-code liii">
				<li>Linear Regression</li>
				<li>K-Nearest Neighbours</li>
				<li>Logistic Regression</li>
				<li>Support Vector Machine</li>
				<li>Decision Tree & Random Forest</li>
				<li>Neural Networks</li>
			</ul>
			<Mark desc="For Neural Network we have other dedicated TAB."/>
			<Head name="Unsupervised Learning"/>
			<Mark desc="In unsupervised learning, as you might guess, the training data is unlabeled"/>
			<Head name="Semi-Supervised Learning"/>
			<Mark desc=""/>
			<Head name="Reinforcement Learning"/>
			<Mark desc=""/>
			<Head name="Overfitting and Underfitting"/>
			<Mark desc=""/>
			<br/>
			<Navigator left="/" right="/machine/algo/linear"/>

		</>
	);
}

function MacAlLinear(props){

	window.scrollTo(0,0);
	const inlineFormula = `\\theta = (X^T.X)^{-1}.X^T.y`;
	return(
		<>
		 <MathJax.Provider>
			<Head name="Linear Regression"/>
			<Mark desc="Regression is a statistical method used in finance, investing, and other disciplines that attempts to determine the strength and character of the 
				relationship between one dependent variable and a series of other variables called as independent variable.
				More generally, a linear model makes a prediction by simply computing a weighted sum of	the 
				input features, plus a constant called the bias term.y here is said to be as predicted value.
			"/>
			<MathJax.Node inline formula={"y = \\theta_{0} + \\theta_{1}.x_1 + \\theta_{2}.x_2 + ... + \\theta_{n}.x_n "} className="math put-in-side-code" />
			<Mark desc="This can be written much more concisely using a vectorized form, as shown in the below Equation."/>
			<MathJax.Node inline formula={"y = h_\\theta(x) = \\theta.x"} className="math put-in-side-code" />
			<Mark desc="To find the value of θ that minimizes the cost function, there is a closed-form solution
				in other words, a mathematical equation that gives the result directly. This is called
				the Normal Equation"/>
			<MathJax.Node inline formula={inlineFormula} className="math put-in-side-code" />
			<Head name="Gradient Descent"/>
			<Mark desc=""/>
			<Head name="Polynomial Regression"/>
			<Head name="Ridge Regression"/>
			<Mark desc="Ridge Regression (also called Tikhonov regularization) is a regularized version of 
				Linear Regression. tlp:br Ridge Regression cost function is given as
			"/>
			<MathJax.Node inline formula={"j(\\theta) = MSE(\\theta) + \\alpha\\sum \\theta_i^2"} className="math put-in-side-code" />
			<Mark desc="Ridge Regression closed-form solution"/>
			<MathJax.Node inline formula={"\\theta = (X^T.X + \\alpha.A)^-1 .X^T .y"} className="math put-in-side-code" />


			<Head name="Lasso Regression"/>
			<Mark desc="Least Absolute Shrinkage and Selection Operator Regression (simply called Lasso
Regression) is another regularized version of Linear Regression."/>		
			<Head name="Elastic Net"/>
			<Mark desc=""/>
			<Head name="Early Stopping"/>
			<Mark desc="A very different way to regularize iterative learning algorithms such as Gradient
				Descent is to stop training as soon as the validation error reaches a minimum. This is
				called early stopping."/>
			<Head name="Logistic Regression"/>
			<Mark desc=""/>
			<br/>
			<Navigator left="/machine/algo/introduction" right="/machine/algo/decision"/>		
		 </MathJax.Provider>
		</>
	);
}
function MacAlDecision(props){
	window.scrollTo(0,0);
	return(
		<>
			<Head name="Decision Tree"/>
			<Mark desc="Like SVMs, Decision Trees are versatile Machine Learning algorithms that can per‐
				form both classification and regression tasks, and even multioutput tasks. They are
				very powerful algorithms, capable of fitting complex datasets.
			"/>
			<Head name="Random Forest"/>
			<br/>
			<Navigator left="/machine/algo/linear" right="/machine/algo/svm"/>		
		</>
	);
}

function MacAlSVM(props){
	window.scrollTo(0,0);
	return(
		<>
			<Head name="Support Vector Machine"/>
			<Mark desc="A Support Vector Machine (SVM) is a very powerful and versatile Machine Learning
			model, capable of performing linear or nonlinear classification, regression, and even
			outlier detection. It is one of the most popular models in Machine Learning, and any‐
			one interested in Machine Learning should have it in their toolbox. SVMs are partic‐ularly well suited for classification of complex but small- or medium-sized datasets.
			"/>
			<br/>
			<Navigator left="/machine/algo/decision" right="/machine/algo/k-near"/>		
		</>
	);
}
export {HomeMac,MacAlIntro,MacAlLinear,MacAlDecision,MacAlSVM}
