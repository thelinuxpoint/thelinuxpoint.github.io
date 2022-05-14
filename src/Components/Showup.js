import React from 'react';
import {NavLink} from "react-router-dom";
import Mark from './Markdown'
import Head from './Header'

function Showup(argument) {
	return(
		<>

		<p className="show-up-desc-0">This is the website Created by Prakash Choudhary for learning Technical Stuffs. This Website is Under Construction</p>

	{/*##########################################################*/}
		<div className="block-deck">
		<div id="programming" className="show-up-outer">
			<div className="show-up-out">
				<Head name="Programming Language"/>
			</div>
		</div>
		<p className="show-up-desc">Pick up Your Favourite Programming Language From Below and start Learning</p>
		<div className="skills-inner" align="center">
			<div>
				<img src="prog.svg"/ >
			</div>
		</div>

		<div className="show-up" id="programming" onMouseMove={function(x){
			if ((window.innerWidth-x.nativeEvent.x)<=80){
				document.getElementById('scroll-pr-b').style.visibility="visible";
				

			}else if(x.nativeEvent.x<=80){
				
				document.getElementById('scroll-pr-f').style.visibility="visible";	

			}else{
				document.getElementById('scroll-pr-b').style.visibility="hidden";
				document.getElementById('scroll-pr-f').style.visibility="hidden";

			}
		}} >
			<div id="scroll-pr-f"  onClick={
				function(){
					var c = document.getElementsByClassName('show-up')[0];
					c.scrollLeft-=window.innerWidth }}>
				<img src="arrow.png" style={{transform:"rotateY(180deg)"}} />
			</div>

				<div style={{width:"20px"}}></div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="cpp.svg" style={{width:"200px",height:"200px"}}/>
					</div>
					<NavLink className="descr" to="/cpp"><button>Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="ruby.svg" style={{width:"200px",height:"200px"}}/>
					</div>
					<NavLink className="descr" to="/ruby"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="java.svg" style={{width:"200px",height:"200px"}}/>
					</div>
					<NavLink className="descr" to="/java"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="python.svg" style={{width:"200px",height:"200px"}}/>
					</div>
					<NavLink className="descr" to="/python"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="js.svg" style={{width:"200px",height:"200px"}} />
					</div>
					<NavLink className="descr" to="/javascript"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="rust.svg" style={{width:"200px",height:"200px"}}/>
					</div>
					<NavLink className="descr" to="/rust"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="php.svg" style={{width:"200px",height:"200px"}} />
					</div>
					<NavLink className="descr" to="/php"><button>  Go ❱❱ </button></NavLink>
				</div>
				
				<div style={{width:"20px"}}></div>
				<div id="scroll-pr-b" onClick={
					function(){
						var c = document.getElementsByClassName('show-up')[0];
						c.scrollLeft+=window.innerWidth
					}}>
					<img src="arrow.png" />
				</div>
		</div>
		</div>
	{/*################################################*/}
		<div className="block-deck">
		<div id="web" className="show-up-outer">
			<div className="show-up-out">
				<Head name="Web Development"/>
			</div>
		</div>
		<p className="show-up-desc">Start Your Journey of WEB Development using the skills below</p>

		<div className="skills-inner" align="center">
			<div>
				<img src="web_ill.svg"/ >
			</div>
		</div>
		<div className="show-up" onMouseMove={function(x){
			if ((window.innerWidth-x.nativeEvent.x)<=80){
				document.getElementById('scroll-we-b').style.visibility="visible";
				

			}else if(x.nativeEvent.x<=80){
				
				document.getElementById('scroll-we-f').style.visibility="visible";	

			}else{
				document.getElementById('scroll-we-b').style.visibility="hidden";
				document.getElementById('scroll-we-f').style.visibility="hidden";

			}
		}}><div id="scroll-we-f" onClick={
					function(){
						var c = document.getElementsByClassName('show-up')[1];
						c.scrollLeft-=window.innerWidth
					}	
			}><img src="arrow.png"  style={{transform:"rotateY(180deg)"}}/></div>
				<div style={{width:"20px"}}></div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="laravel.svg" style={{width:"200px",height:"200px"}}/>
					</div>
					<NavLink className="descr" to="/laravel"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="logo192.png" style={{width:"200px",height:"200px"}}/>
					</div>
					<NavLink className="descr" to="/web/react"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="rails.png" style={{width:"220px",height:"200px"}}/>
					</div>
					<NavLink className="descr" to="/web/rails"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="html5.png" style={{width:"200px",height:"200px"}}/>
					</div>
					<NavLink className="descr" to="/web/html"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="css3.svg" style={{width:"200px",height:"200px"}} />
					</div>
					<NavLink className="descr" to="/web/css"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="js.svg" style={{width:"200px",height:"200px"}} />
					</div>
					<NavLink className="descr" to="/javascript"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="sql.png" style={{width:"220px",height:"200px"}} />
					</div>
					<NavLink className="descr" to="/web/sql"><button>  Go ❱❱ </button> </NavLink>
				</div>
				<div id="scroll-we-b" onClick={
					function(){
						var c = document.getElementsByClassName('show-up')[1];
						c.scrollLeft+=window.innerWidth
					}	
			}><img src="arrow.png" /></div>
		</div>
				</div>
{/*################################################*/}
		<div className="block-deck">
		<div id="it" className="show-up-outer">
			<div className="show-up-out">
				<Head name="Information Technology"/>
			</div>
		</div>	
		<div className="skills-inner" align="center">
			<div>
				<img src="IT.svg"/ >
			</div>
		</div>
		<div className="show-up" onMouseMove={function(x){
			if ((window.innerWidth-x.nativeEvent.x)<=80){
				document.getElementById('scroll-it-b').style.visibility="visible";
			
			}else if(x.nativeEvent.x<=80){
				document.getElementById('scroll-it-f').style.visibility="visible";	

			}else{
				document.getElementById('scroll-it-b').style.visibility="hidden";
				document.getElementById('scroll-it-f').style.visibility="hidden";

			}
			
		}}><div id="scroll-it-f" onClick={
					function(){
						var c = document.getElementsByClassName('show-up')[2];
						c.scrollLeft-=window.innerWidth
					}	
			}><img src="arrow.png"  style={{transform:"rotateY(180deg)"}}/></div>
				<div style={{width:"20px"}}></div>
				<div className="show-up-inner-0">
					Ethical Hacking
					<div>
						<img alt="..." src="cyber-s-2.gif" style={{width:"200px",height:"180px"}}/>
					</div>
					<NavLink className="descr" to="/eth"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					Shell Programming
					<div>
						<img alt="..." src="shell.png" style={{width:"200px",height:"180px"}}/>
					</div>
					<NavLink className="descr" to="/bash"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					Batch Programming
					<div>
						<img alt="..." src="command-line.png" style={{width:"200px",height:"180px"}}/>
					</div>
					<NavLink className="descr" to="/batch"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0" >
					CryptoGraphy
					<div>
						<img alt="..." src="drawing-2.svg" style={{width:"200px",height:"180px"}}/>
					</div>
					<NavLink className="descr" to="/crypto"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					Linux Commands
					<div>
						<img alt="..." src="debian.png" style={{width:"200px",height:"180px"}}/>
					</div>
					<NavLink className="descr" to="/linuxcommand"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div id="scroll-it-b" onClick={
					function(){
						var c = document.getElementsByClassName('show-up')[2];
						c.scrollLeft+=window.innerWidth
					}	
			}><img src="arrow.png" /></div>
		</div>
		</div>		
{/*################################################*/}
		<div className="block-deck">
		<div id="machine" className="show-up-outer">
			<div className="show-up-out">
				<Head name="Machine Learning"/>
			</div>
		</div>

		<div className="skills-inner" align="center">
			<div>
				<img src="ml.svg" />
			</div>
		</div>

		<div className="show-up" onMouseMove={
			function(x){
				if ((window.innerWidth-x.nativeEvent.x)<=80){
				document.getElementById('scroll-ml-b').style.visibility="visible";
			
			}else if(x.nativeEvent.x<=80){
				document.getElementById('scroll-ml-f').style.visibility="visible";	

			}else{
				document.getElementById('scroll-ml-b').style.visibility="hidden";
				document.getElementById('scroll-ml-f').style.visibility="hidden";

			}
			

			}} ><div id="scroll-ml-f" onClick={
					function(){
						var c = document.getElementsByClassName('show-up')[3];
						c.scrollLeft-=window.innerWidth
					}	
			}><img src="arrow.png"  style={{transform:"rotateY(180deg)"}}/></div>
			<div style={{width:"20px"}}></div>
			<div className="show-up-inner-0">
				Numpy
					<div>
						<img alt="..." src="numpy.svg" style={{width:"200px",height:"180px"}}/>
					</div>
					<NavLink className="descr" to="/machine/numpy"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
				Pandas
					<div>
						<img alt="..." src="pandas_white.svg" style={{width:"200px",height:"180px"}}/>
					</div>
					<NavLink className="descr" to="/machine/pandas"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
				Image Processing
					<div>
						<img alt="..." src="exe.svg" style={{width:"200px",height:"180px"}}/>
					</div>
					<NavLink className="descr" to="/machine/image"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
				Neural Networks
					<div>
						<img alt="..." src="models.svg" style={{width:"200px",height:"180px"}}/>
					</div>
					<NavLink className="descr" to="/machine/neural"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
				Statistics
					<div>
						<img alt="..." src="prob.png" style={{width:"200px",height:"180px"}}/>
					</div>
					<NavLink className="descr" to="/machine/statistics"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
				Machine Learning Algorithms
					<div>
						<img alt="..." src="rb.png" style={{width:"200px",height:"180px"}}/>
					</div>
					<NavLink className="descr" to="/machine/algo"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div id="scroll-ml-b" onClick={
					function(){
						var c = document.getElementsByClassName('show-up')[3];
						c.scrollLeft+=window.innerWidth
					}	
			}><img src="arrow.png"/></div>
						</div>
		</div>
{/*################################################*/}
		<div className="block-deck">
		<div id="embed" className="show-up-outer">
			<div className="show-up-out">
				<Head name="Embedded Tools"/>
			</div>
		</div>
		<div className="skills-inner" align="center">
			<div>
				<img src="firmware.svg"/ >
			</div>
		</div>
		<div className="show-up" onMouseMove={function(x){
			var c = document.getElementsByClassName('show-up')[4];

			if ((window.innerWidth-x.nativeEvent.x)<=40){
				c.scrollLeft+=30

			}else if(x.nativeEvent.x<=40){
				c.scrollLeft-=30

			}
		}} onWheel={
			function(x){
				var c = document.getElementsByClassName('show-up')[4];
				if(x.deltaY<0 && x.shiftKey==true){
					c.scrollLeft+=60
				}else if(x.deltaY>0 && x.shiftKey==true){
					c.scrollLeft-=60
				}
			}

			}>
			<div style={{width:"20px"}}></div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="rasp.png" style={{width:"180px",height:"200px"}}/>
					</div>
					<button>  Go ❱❱ </button>
				</div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="ard-uno.png" style={{width:"200px",height:"200px"}}/>
					</div>
					<button>  Go ❱❱ </button>
				</div>
				
		</div>
			</div>		
		<div className="block-deck">
		<div id="programming" className="show-up-outer">
			<div className="show-up-out">
				<Head name="CryptoCurrency"/>
			</div>
		</div>

		<div className="skills-inner" align="center">
			<div>
				<img src="cryptocur.svg"/ >
			</div>
		</div>

		<div className="show-up" onMouseMove={function(x){
			var c = document.getElementsByClassName('show-up')[5];

			if ((window.innerWidth-x.nativeEvent.x)<=40){
				c.scrollLeft+=30

			}else if(x.nativeEvent.x<=40){
				c.scrollLeft-=30

			}
		}} onWheel={
			function(x){
				var c = document.getElementsByClassName('show-up')[5];
				if(x.deltaY<0 && x.shiftKey==true){
					c.scrollLeft+=60
				}else if(x.deltaY>0 && x.shiftKey==true){
					c.scrollLeft-=60
				}
			}

			}>
			<div style={{width:"20px"}}></div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="sol.svg" style={{width:"180px",height:"200px"}}/>
					</div>
					<NavLink className="descr" to="/web3/solidity"><button>  Go ❱❱ </button></NavLink>
				</div>
				<div className="show-up-inner-0">
					<div>
						<img alt="..." src="blockchain.png" style={{width:"180px",height:"200px"}}/>
					</div>
					<NavLink className="descr" to="/web3/blockchain"><button>  Go ❱❱ </button></NavLink>
				</div>
			</div>
		</div>
			<Author/>
			</>
	);
}
function Author(){
    return(
        <div className="author-outer" style={{color:"white",fontSize:"17px"}}>
            <div className="author-inner">
            <hr style={{height:"2px",backgroundColor:"white"}}/>
            <h2> About Author :</h2>
            <p>Hello Geeks! my name is <span style={{color:"darkblue"}}>Prakash Choudhary</span>, I Am a EXTC Engineer who builded this Website for user like me struggling to find proper source to learn from.</p>
            <br/>
            <div className="author">
            <div draggable={false} className="" title="Visit YouTube Channel" onClick={function(){
                     var x = document.createElement('a');
                     x.href="https://www.youtube.com/c/thelinuxpoint";
                     x.click();}}>
                <img src="youtube.dark.min.svg" alt="..." style={{'height':'30px','width':'30px'}}/>
            </div>
            <div className="me">

            </div>
            <div draggable={false} className="" title="Visit GitHub" onClick={function(){
                    var x = document.createElement('a');
                    x.href="https://github.com/thelinuxpoint";
                    x.click();
            }}>
                <img src="github.dark.min.svg" alt="..." style={{'height':'30px','width':'30px'}}/>
            </div>
            </div>
            <br/>
            <br/>
                {/*<Donate/>*/}
            <br/>
           </div>

        </div>
    );
}
export default Showup;
