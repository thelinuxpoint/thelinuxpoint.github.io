import React from 'react';
import {NavLink} from "react-router-dom";
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
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
function slideIN(){
	if(window.innerHeight>window.innerWidth){
		document.getElementsByClassName('flap-crypto')[0].style.left="-300px";
	}
}

function FlapCrypto(){
	return(
		<>
		<div className="flap-crypto">
			<div className="display">
				<img src="https://thelinuxpoint.github.io/greenkey.svg" style={{width:"100px",height:"50px"}}/>
			</div>	
			<div className="display">
				<img src="https://thelinuxpoint.github.io/redkey.svg" style={{width:"100px",height:"50px",transform:"rotateY(180deg)"}}/>
			</div>	
			<hr/>
			<ol className="topic-toggle-ol">
				{/*INTRO*/}
					<li className="topic-toggle-li">
						<div className="descr">Introduction</div>
						<a className="toggle-switch" id="toggle-crypto-i" onClick={function(){
							if (document.getElementById('toggle-crypto-i').style.transform=="rotateZ(90deg)"){
								document.getElementById('toggle-crypto-i').style.transform="rotateZ(0deg)";
								document.getElementById('crypto-i').hidden=true;

							}else{
								document.getElementById('toggle-crypto-i').style.transform="rotateZ(90deg)";
								document.getElementById('crypto-i').hidden=false;

							}
						}}>❱</a>
					</li>
					<ul className="ull" id="crypto-i" hidden={true}>
						<NavLink to="/crypto/intro" className="descr"><li>Introduction</li></NavLink>
					</ul>

				{/*A*/}
					<li className="topic-toggle-li">
						<div className="descr">Hash Functions</div>
						<a className="toggle-switch" id="toggle-a" onClick={function(){
							if (document.getElementById('toggle-a').style.transform=="rotateZ(90deg)"){
								document.getElementById('toggle-a').style.transform="rotateZ(0deg)";
								document.getElementById('cc-a').hidden=true;

							}else{
								document.getElementById('toggle-a').style.transform="rotateZ(90deg)";
								document.getElementById('cc-a').hidden=false;

							}
						}}>❱</a>
					</li>
					<ul className="ull" id="cc-a" hidden={true}>
						<NavLink to="/crypto/rsa" className="descr"><li>Secure Hash</li></NavLink>

					</ul>
				{/*B*/}
					<li className="topic-toggle-li">
						<div className="descr">Encryption</div>
						<a className="toggle-switch" id="toggle-b"  onClick={function(){
							if (document.getElementById('toggle-b').style.transform=="rotateZ(90deg)"){
								document.getElementById('toggle-b').style.transform="rotateZ(0deg)";
								document.getElementById('cc-b').hidden=true;

							}else{
								document.getElementById('toggle-b').style.transform="rotateZ(90deg)";
								document.getElementById('cc-b').hidden=false;

							}
						}}>❱</a>
					</li>
					<ul className="ull" id="cc-b" hidden={true}>
						
					</ul>
				{/*C*/}
					<li className="topic-toggle-li">
						<div className="descr">Symetric Key</div>
						<a className="toggle-switch" id="toggle-c"  onClick={function(){
							if (document.getElementById('toggle-c').style.transform=="rotateZ(90deg)"){
								document.getElementById('toggle-c').style.transform="rotateZ(0deg)";
								document.getElementById('cc-c').hidden=true;

							}else{
								document.getElementById('toggle-c').style.transform="rotateZ(90deg)";
								document.getElementById('cc-c').hidden=false;

							}
						}}>❱</a>
					</li>
					<ul className="ull" id="cc-c" hidden={true}>
						
					</ul>
				{/*D*/}
					<li className="topic-toggle-li">
						<div className="descr">Asymetric Key</div>
						<a className="toggle-switch" id="toggle-d"  onClick={function(){
							if (document.getElementById('toggle-d').style.transform=="rotateZ(90deg)"){
								document.getElementById('toggle-d').style.transform="rotateZ(0deg)";
								document.getElementById('cc-d').hidden=true;

							}else{
								document.getElementById('toggle-d').style.transform="rotateZ(90deg)";
								document.getElementById('cc-d').hidden=false;

							}
						}}>❱</a>
					</li>
					<ul className="ull" id="cc-d" hidden={true}>
						<NavLink to="/crypto/rsa" className="descr"><li>RSA Basics</li></NavLink>
						<NavLink to="/crypto/rsa_ed" className="descr"><li>RSA Encryption/Decryption</li></NavLink>
						<NavLink to="/crypto/ecc" className="descr" onClick={slideIN}><li>ECC Basics</li></NavLink>
						<NavLink to="/crypto/ecc_ed" className="descr" onClick={slideIN}><li>ECC Encryption/Decryption</li></NavLink>

					</ul>					
					{/**/}
					<li className="topic-toggle-li">
						<div className="descr">Digital Signature</div>
						<a className="toggle-switch" id="toggle-e"  onClick={function(){
							if (document.getElementById('toggle-e').style.transform=="rotateZ(90deg)"){
								document.getElementById('toggle-e').style.transform="rotateZ(0deg)";
								document.getElementById('cc-e').hidden=true;

							}else{
								document.getElementById('toggle-e').style.transform="rotateZ(90deg)";
								document.getElementById('cc-e').hidden=false;

							}
						}}>❱</a>
					</li>
					<ul className="ull" id="cc-e" hidden={true}>
						<NavLink to="/crypto/ecdsa" className="descr"><li>ECDSA</li></NavLink>
					</ul>			
				</ol>
			<Author/>
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

function HomeCrypto(){
	return(
		<>
			<FlapCrypto/>
			<div id="hamburx" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-crypto')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-crypto')[0].style.left="-300px"
            	}
           
            }}>
                <div id="ham-1"></div>
                <div id="ham-2"></div>
                <div id="ham-3"></div>
			</div>
		</>
	);
}
function CryptoIntro(props){
	return(
		<>
			<Head id="introduction" name="Introduction To CryptoGraphy"/>
			
			<Mark desc="tlp:cyan cryptography referred almost exclusively to encryption, which is the process of converting ordinary information (called plaintext) into unintelligible form ( called tlp:box ciphertext ).Decryption is the reverse, in other words, moving from the unintelligible ciphertext back to plaintext. A cipher (or cypher) is a pair of algorithms that carry out the encryption and the reversing decryption. The detailed operation of a cipher is controlled both by the algorithm and, in each instance, by a 'key'. The key is a secret (ideally known only to the communicants), usually a string of characters (ideally short so it can be remembered by the user), which is needed to decrypt the ciphertext."/>	
			<Mark desc="Cryptography is further divided into dsub parts which includes Asymetric Key Encryption, Symetric Key Encryption and Hash Functions. Basically Hash Functions are 'ONE WAY FUNCTIONS' used for Message Verification and Signature Verification."/>
			<img className="put-in-side-code" src="https://thelinuxpoint.github.io//drawing-1.svg" />
			<Head id="example" name="Example"/>
			<Navigator left="/crypto" right="/crypto/hash"/>

		</>
	);
}
function CryptoECC(props){
	window.scrollTo(0,0);

	return(
		<>
			<Head id="introduction" name="Elliptic Curve CryptoGraphy (ECC)"/>
			<Mark desc="The ECC cryptography is considered a natural modern successor of the RSA cryptosystem, because ECC uses smaller keys and signatures than RSA for the same level of security and provides very fast key generation, fast key agreement and fast signatures."/>
			
			<Head id="" name="Elliptic Curves"/>
			<div align="center"><img style={{height:"400px",width:"400px",backgroundColor:"white",borderRadius:"5px"}} src="https://thelinuxpoint.github.io//ec.gif" className="put-in-side-code"/></div>

			<Mark desc="The elliptic curve cryptography (ECC) uses elliptic curves over the  𝔽p (where p is prime and p > 3) or 𝔽2m (where the fields size p = 2_m_). This means that the field is a square matrix of size p x p and the points on the curve are limited to integer coordinates within the field only. All algebraic operations within the field (like point addition and multiplication) result in another point within the field. The elliptic curve equation over the finite field 𝔽p takes the following modular form:"/>
			<br/>
			<div align="center">

			<math className="put-in-side-code">
			<mrow>
      			<mrow>
        			<msup>
          				<mi>y</mi>
          				<mn>2</mn>
        			</msup>
        			<mo>=</mo>
        			(<msup>
          				<mo>x</mo>
          				<mn>3</mn>
        			</msup>	
      			</mrow>
      			<mo>+</mo>
      			
        		<mo>ax</mo>
      			
      			<mo>+</mo>
      			<mo>b</mo>)
        			mod p
    		</mrow>
    		</math>
			</div>
			<br/>
			<Head name="Point Addition"/>
			<Mark desc="With 2 distinct points, P{x,y} and Q{x,y}, addition is defined as the negation of the 
			point resulting from the intersection of the curve, E, and the straight line defined 
			by the points P{x,y} and Q{x,y}, giving the point, R{x,y}. tlp:br tlp:br ⚪ P + Q = R tlp:br tlp:br 
			⚪ (Xp,Yp) + (Xq,Yq) = (Xr,Yr) tlp:br tlp:br Assuming the elliptic curve, E, is given 
			by y^2 = x^3 + a*x + b, this can be calculated as: tlp:br tlp:br ⚪ λ = (Yq - Yp)/(Xq - Xp) 
			tlp:br tlp:br ⚪ Xr = λ^2 - Xp - Xq tlp:br tlp:br ⚪ Yr = λ*(Xp - Xr) - Yp"/>
			<br/>
			<div align="center"><img style={{backgroundColor:"white",borderRadius:"5px"}} src="/eccurves.png" className="put-in-side-code"/></div>
			<br/>
			<Head name="Point Doubling"/>
			<Mark desc="Where the points P and Q are coincident (at the same coordinates), addition is 
			similar, except that there is no well-defined straight line through P, so the operation is 
			closed using limiting case, the tangent to the curve, E, at P.
			tlp:br This is calculated as above, taking derivatives (dE/dx)/(dE/dy): tlp:br tlp:br 
			⚪ λ = (3*Xp^2 + a) / 2*Yp tlp:br tlp:br 
			where a is from the defining equation of the curve, E, above. 
			tlp:br tlp:br ⚪ tlp:org Point tlp:org Multiplication : tlp:br tlp:br The straightforward way of computing a point multiplication is through repeated addition. However, there are more efficient approaches to computing the multiplication. 
			"/>
			<br/>
			<Navigator left="/crypto/rsa_ed" right="/crypto/ecc_ed"/>

		</>
	);
}
function CryptoRSA(props){
	window.scrollTo(0,0);

	return(
		<>
			<Head id="introduction" name="RSA"/>

		</>
	);
}
export {HomeCrypto,CryptoIntro,CryptoECC,CryptoRSA};
