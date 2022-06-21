import React from 'react';
import {NavLink} from "react-router-dom";
import { getAuth, getRedirectResult, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

import algoliasearch from "algoliasearch/lite";
import {InstantSearch, SearchBox, Hits} from "react-instantsearch-dom";
//###########################################################################################
import Flap from "./Flap"

// const searchClient = algoliasearch('W6CIORSNO7','de177de17ace695fae1f12d1feff60ab');
//#####################################################################################

const firebaseConfig = {
    apiKey: "AIzaSyCu470ly6EqfxhiiUSYcqcs9Myf9V8YJdg",
    authDomain: "thelinuxpointdata.firebaseapp.com",
    databaseURL: "https://thelinuxpointdata-default-rtdb.firebaseio.com",
    projectId: "thelinuxpointdata",
    storageBucket: "thelinuxpointdata.appspot.com",
    messagingSenderId: "941126756395",
    appId: "1:941126756395:web:a809387bb8db65c37f226e",
    measurementId: "G-VJKQN5QK13"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

//#####################################################################################
function Animate(){
    window.requestAnimationFrame = function()
        {
        return (
            window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function(/* function */ callback){
                window.setTimeout(callback, 1000 / 60);
            }
        );
}();


var canvas = document.getElementById('canvas'); 


var context = canvas.getContext('2d');

//get DPI
let dpi = window.devicePixelRatio || 1;
context.scale(dpi, dpi);
console.log(dpi);

function fix_dpi() {
//get CSS height
//the + prefix casts it to an integer
//the slice method gets rid of "px"
let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);

//scale the canvas
canvas.setAttribute('height', style_height * dpi);
canvas.setAttribute('width', style_width * dpi);
}

    var particle_count = 45,
        particles = [],
        couleurs   = ["orange", "cyan", "yellowgreen","magenta"];
    function Particle()
    {

        this.radius = Math.round((Math.random()*3)+5);
        this.x = Math.floor((Math.random() * ((+getComputedStyle(canvas).getPropertyValue("width").slice(0, -2) * dpi) - this.radius + 1) + this.radius));
        this.y = Math.floor((Math.random() * ((+getComputedStyle(canvas).getPropertyValue("height").slice(0, -2) * dpi) - this.radius + 1) + this.radius));
        this.color = couleurs[Math.floor(Math.random()*couleurs.length)];
        this.speedx = Math.round((Math.random()*201)+0)/100;
        this.speedy = Math.round((Math.random()*201)+0)/100;

        switch (Math.round(Math.random()*couleurs.length))
        {
            case 1:
            this.speedx *= 1;
            this.speedy *= 1;
            break;
            case 2:
            this.speedx *= -1;
            this.speedy *= 1;
            break;
            case 3:
            this.speedx *= 1;
            this.speedy *= -1;
            break;
            case 4:
            this.speedx *= -1;
            this.speedy *= -1;
            break;
        }
            
        this.move = function()
        {
            
            context.beginPath();
            context.globalCompositeOperation = 'source-over';
            context.fillStyle   = this.color;
            context.globalAlpha = 1;
            context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
            context.fill();
            context.closePath();

            this.x = this.x + this.speedx;
            this.y = this.y + this.speedy;
            
            if(this.x <= 0+this.radius)
            {
                this.speedx *= -1;
            }
            if(this.x >= canvas.width-this.radius)
            {
                this.speedx *= -1;
            }
            if(this.y <= 0+this.radius)
            {
                this.speedy *= -1;
            }
            if(this.y >= canvas.height-this.radius)
            {
                this.speedy *= -1;
            }

            for (var j = 0; j < particle_count; j++)
            {
                var particleActuelle = particles[j],
                    yd = particleActuelle.y - this.y,
                    xd = particleActuelle.x - this.x,
                    d  = Math.sqrt(xd * xd + yd * yd);

                if ( d < 200 )
                {
                    context.beginPath();
                    context.globalAlpha = (200 - d) / (200 - 0);
                    context.globalCompositeOperation = 'destination-over';
                    context.lineWidth = 1;
                    context.moveTo(this.x, this.y);
                    context.lineTo(particleActuelle.x, particleActuelle.y);
                    context.strokeStyle = this.color;
                    context.lineCap = "round";
                    context.stroke();
                    context.closePath();
                }
            }
        };
    };
    for (var i = 0; i < particle_count; i++)
    {
        fix_dpi();
        var particle = new Particle();
        particles.push(particle);
    }


        function animate()
        {
            fix_dpi();
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < particle_count; i++)
            {
                particles[i].move();
            }
            requestAnimationFrame(animate);
        }
        animate(); 
}



function GAuthenticate(argument) {
                        
    signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        document.getElementsByClassName("close-btn")[0].click()

        document.getElementsByClassName("tt")[0].innerHTML=user.displayName
        setTimeout(()=>{
            document.getElementsByClassName("tt")[0].innerHTML="The Linux Point"
        },6000)


    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
//#####################################################################################
function SignIn(argument) {
   
    var email = document.getElementsByClassName("input-6")[0].value
    var pass  = document.getElementsByClassName("input-7")[0].value

    
    signInWithEmailAndPassword(auth, email, pass).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        document.getElementsByClassName("close-btn")[0].click()
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

}


//#####################################################################################
function NavBar(props) {

    var MySvg = <svg viewBox="0 0 1320 300">
                    <text className="tt" x="50%" y="50%" dy=".35em" text-anchor="middle">
                        The Linux Point
                    </text>
                </svg>  
    

    var is_m = window.innerWidth<window.innerHeight;



    return(
            <>
             <canvas id="canvas" ></canvas>
            <div draggable={false} className="navbar" >
                <div className="search-btn" onLoad={Animate}>
                    <div className="search-btn-inner">
                        <button className="dashboard" onClick={
                            function(arg){
                                if (document.getElementsByClassName('flap-box')[0].style.right=="30vw") {
                                    document.getElementsByClassName('flap-box')[0].style.right="100vw";
                                }else{
                                    document.getElementsByClassName('flap-box')[0].style.right="30vw";
                                }
                            }
                        }><img alt="..." style={{height:"20px",width:"20px"}} src="https://thelinuxpoint.github.io/threedots.svg" /></button> 
                    </div>
                </div>

                {MySvg}
                
                <div className="search-bar-outer" align="center">
                    <div className="search-bar">
                        <button><img alt="..." src="Vector.png"/></button>
                        <input placeholder="Search in The Linux Point"/>
                    </div>
                </div>
                   {/* <InstantSearch searchClient={searchClient} indexName="thelinuxpoint">
                        <SearchBox/>
                        <Hits/>
            </InstantSearch>*/}

                <div className="account">
                    <div className="account-inner" onClick={props.handler}>
                        <p tooltip="Sign UP/Sign IN" >Log in</p>
                    </div>
                </div>

            </div>
            </>
        );
}

function Login(props) {

    var is_m = window.innerWidth<window.innerHeight;
	if (is_m) {var clas="login-m"} else { var clas="login"}
    
    return(
        <div className={clas} hidden={true}>
            <img alt="..." className="close-btn" src="https://thelinuxpoint.github.io/close.png" onClick={function(){
                        if (is_m){
                            var x=document.getElementsByClassName('login-m')[0];
                            x.hidden=true;

                        }else{
                            var x=document.getElementsByClassName('login')[0];
                            x.hidden=true;
                        }
               
            }}/>
            <div className="account-inter">
                <div>
                    <p className="account-info">Create Account</p>
                </div>
                <div> 
                    <fieldset className="user-legend">
                        <legend > Full Name </legend>
                        <input className="input-1" placeholder="Full Name"/>   
                    </fieldset>
                </div>
                <div>
                    <fieldset className="user-legend">
                        <legend > Email </legend>
                        <input className="input-3" onClick={
                            function (argument) {
                                document.getElementsByClassName("input-3")[0].value=""
                                document.getElementsByClassName("input-3")[0].placeholder="Email example: john@gmail.com"                                
                                document.getElementsByClassName("input-3")[0].style.color="#000"
                                document.getElementsByClassName("input-3")[0].style.fontFamily="IBM Plex Sans"
                            }
                        } placeholder="Email example: john@gmail.com"/>
                    </fieldset>
                </div>
                <div>
                    <fieldset className="user-legend">
                        <legend > Password </legend>
                        <input className="input-4" placeholder="Password atleast 6 characters" type="password" /> 
                        <img alt="..." className="seenoo" src="https://thelinuxpoint.github.io/sidebarc.svg" onClick={function(){
                            var y=document.getElementsByClassName('seenoo')[0];
                            var x=document.getElementsByClassName('input-4')[0];

                            if (new URL(y.src).pathname=="https://thelinuxpoint.github.io/sidebarc.svg"){
                                y.src="https://thelinuxpoint.github.io/sidebar.svg"
                                x.type=""
                            }else{
                                x.type="password" 
                                y.src="https://thelinuxpoint.github.io/sidebarc.svg"
                            }
                        }}/> 
                    </fieldset>
                </div>
               
                <div className="create-outer">
                    <button className="create" onClick={SignIn}>Create Account</button>
                </div>

                <button className="go-but" onClick={GAuthenticate}><img alt="..." src="go.svg"/></button>

                <p className="have">Already have an account? <span onClick={function(){
                     if (is_m){
                           
                        var y=document.getElementsByClassName('login-m')[0];
                        y.hidden=true;
                        var x=document.getElementsByClassName('signup-m')[0];
                        x.hidden=false;

                    }else{
                        var y=document.getElementsByClassName('login')[0];
                        y.hidden=true;
                        var x=document.getElementsByClassName('signup')[0];
                        x.hidden=false;
                    }
                }} className="signin">Sign In</span></p>
            
                <div className="login-div-1">
                    <img alt="..." src="https://thelinuxpoint.github.io/awe.gif"/>
                </div>

                <div className="login-div-2">
                    <img alt="..." src="https://thelinuxpoint.github.io/logo-built_black.png"/>
                </div>
            </div>
        </div>
   
    );
}

class Signup extends React.Component {
    constructor(props){
        super(props)
    }

    render(){       
        var is_m = window.innerWidth<window.innerHeight;
        if (is_m) {var clas="signup-m"} else { var clas="signup"}

        return(
        <div className={clas} hidden={true}>
            <img alt="..." className="close-btn" src="https://thelinuxpoint.github.io/close.png" onClick={function(){
                if(is_m){
                    var x=document.getElementsByClassName('signup-m')[0];
                    x.hidden=true;
                }else{
                    var x=document.getElementsByClassName('signup')[0];
                    x.hidden=true;

                }
            }}/>
            <div className="account-inter">
                <div>
                    <p className="signin-info">Sign In</p>
                </div>

                <div> 
                    <fieldset className="user-legend">
                        <legend > Email </legend>
                        <input className="input-6" placeholder="  Email example: john@gmail.com"/>
                    </fieldset>
                </div>

                <div> 
                    <fieldset className="user-legend">
                        <legend > Password </legend>
                        <input className="input-7" placeholder="  Password" type="password"/>  
                        <img alt="..." className="seenoo" src="https://thelinuxpoint.github.io/sidebarc.svg" onClick={function(){
                            var y=document.getElementsByClassName('seenoo')[0];
                            var x=document.getElementsByClassName('input-7')[0];
                            console.log(y.src)
                            if (new URL(y.src).pathname=="https://thelinuxpoint.github.io/sidebarc.svg"){
                                y.src="https://thelinuxpoint.github.io/sidebar.svg"
                                x.type=""
                            }else{
                                x.type="password" 
                                y.src="https://thelinuxpoint.github.io/sidebarc.svg"
                            }
                        }}/> 
                    </fieldset>
                </div>

                <div className="create-outer">
                    <button className="create" onClick={SignIn}>Sign In</button>
                </div>

                <button className="go-but" onClick={GAuthenticate}><img alt="..." src="https://thelinuxpoint.github.io/go.svg"/></button>

                <p className="have" >Don’t have an account yet? <span onClick={
                    function(){
                    if (is_m){
                           
                        var y=document.getElementsByClassName('login-m')[0];
                        y.hidden=false;
                        var x=document.getElementsByClassName('signup-m')[0];
                        x.hidden=true;

                    }else{
                        var y=document.getElementsByClassName('login')[0];
                        y.hidden=false;
                        var x=document.getElementsByClassName('signup')[0];
                        x.hidden=true;
                    }
                       
                    }
                } className="signin">Create new for free!</span></p>            
                <p className="forget">Forgot Password?</p>

                <div className="login-div-1">
                    <img alt="..." src="https://thelinuxpoint.github.io/awe.gif"/>
                </div>

                <div className="login-div-2">
                    <img alt="..." src="https://thelinuxpoint.github.io/logo-built_black.png"/>
                </div>
            </div>
        </div>
        );
    }
}

export {NavBar,Login,Signup}
