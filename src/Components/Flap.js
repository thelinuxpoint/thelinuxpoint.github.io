import React from 'react';
import {NavLink} from "react-router-dom";

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
function Flap(props) {
	return(
		<div className="flap-box">
			
			<div className="learn-skills">
				<p id="head-learn-skills">Learn Skills</p>
				<div className="learn-skills-inner">
					<p>🐧 Linux</p>
					<p>🎭 Ethical Hacking</p>
					<p>🌐 Web Devlopment</p>
					<p>💻 Embedded Systems</p>
				</div>
			</div>
			<div className="learn-programming">
				<p id="head-learn-skills">Learn Programming</p>
				<div className="learn-skills-inner">
					<p>C/C++</p>
					<p>Java</p>
					<p>Python</p>
					<p>Ruby</p>
					<p>Rust</p>
					<p>PHP</p>
					<p>Javascript</p>
				</div>
			</div>
			<div className="learn-it">
				<p id="head-learn-skills">Learn I.T.</p>
				<div className="learn-skills-inner">
					<p>Networking</p>
					<p>Cryptography</p>
				</div>
			</div>
			<div className="learn-it">
				<p id="head-learn-skills">Machine Learning</p>
				<div className="learn-skills-inner">

					<p>Algorithms</p>
				</div>
			</div>
			<Author/>
		</div>
	);
}

export default Flap;
