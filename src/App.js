import './App.css';

import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { HashRouter,StaticRouter,Redirect } from "react-router-dom";


// Personal Imports ####################################
// CSS
import './Components/Components.css';
import './Content/Content.css';
// Components
import { NavBar,Login,Signup } from "./Components/Navbar";
import { Helmet } from 'react-helmet';

import Flap from "./Components/Flap";
// import Showup from "./Components/Showup";

//cpp folder
import HomeCpp from "./Content/Cpp/HomeCpp";
import IntroCpp from "./Content/Cpp/IntroCpp";
//php folder
import HomePHP from "./Content/PHP/phphome";
import IntroPHP from "./Content/PHP/phpintro";

//ruby folder
import {HomeRuby,RubyIntro,RubyFunc,RubyLtrl} from "./Content/Ruby/Ruby";

//IT folder
import {HomeBash,BashIntro,BashConcept,BashConditional,BashLoops,BashVar} from "./Content/IT/Bash";
import {HomeCrypto,CryptoIntro,CryptoECC,CryptoRSA} from "./Content/IT/Crypto";
import {LinxHome} from "./Content/IT/Lxc";
import {HomeBatch,BatchIntro,BatchVar} from "./Content/IT/Batch";
import {EthIntro,HomeEth,EthReconTools} from "./Content/IT/eth";

//ML folder
import {HomeProb,ProbIntro,ProbFunc} from "./Content/ML/statistics";
import {HomeMac,MacAlIntro,MacAlLinear,MacAlDecision,MacAlSVM} from "./Content/ML/algorithms";
import {HomeNeural,NeuralIntro,NeuralDim,NeuralAct} from "./Content/ML/neural";

//Java folder
import HomeJava from "./Content/Java/HomeJava";
////////////////////////////////////////
// Repository
import Extender from "./Content/Repos/Extender"
////////////////////////////////////////
// Web folder
import { HomeSql,SqlIntro,SqlCreate,SqlTable} from "./Content/Web/sql";
import { HomeReact,ReactIntro } from "./Content/Web/react";
 
///////////////////////////////////////

//Web3 Folder
import { HomeSol,SolIntro,SolTypes,SolFunc,SolContract } from "./Content/Web3/solidity"

//Resume
import Resume from "./Resume/resume";
///////////////////////////////////////
// Firebase ####################################

import { getAuth,getRedirectResult, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";



//#######################################################################################
// prakash choudhary spinner for indicating loading components
function Spin(){
    return(
        <div className="div-spin" align="center">
            <img alt="⚪" src="https://thelinuxpoint.github.io/spinner.png" id="spinner"/>
        </div>
    )
}

function Donate(){
    return(
        <>
            <div className="donate-outer">
{/*             <img id="mpbutton" src="https://src.mastercard.com/assets/img/acc/global/src_mark_hor_blk.svg?locale=en_us&paymentmethod={acceptedCardBrands}&checkoutid={checkoutId}"/>
*/}            
            </div>
        </>
    );
}
//#######################################################################################

//#######################################################################################
function Cube(){
    return(
        <div className="align">
            <div className="scene">
                <div className="cube">
                    <div className="cube-face  cube-face-front">
                        <img src="ruby.png" style={{paddingLeft:"25px",height:"120px",width:"120px"}}/>
                    </div>
                    <div className="cube-face  cube-face-back">
                        <img src="cpp.png" style={{paddingLeft:"25px",height:"150px",width:"150px"}}/>
                    </div>
                    <div className="cube-face  cube-face-left">
                        <img src="pyt.png" style={{paddingLeft:"25px",height:"150px",width:"150px"}}/>
                    </div>
                    <div className="cube-face  cube-face-right">
                        <img src="js.png" style={{paddingLeft:"25px",height:"150px",width:"150px"}}/>
                    </div>
                    <div className="cube-face  cube-face-top">
                        <img src="rust-logo1.53.0.png" style={{paddingLeft:"25px",height:"150px",width:"150px"}}/>
                    </div>
                    <div className="cube-face  cube-face-bottom">
                        <img src="php1.0.png" style={{paddingLeft:"25px",height:"125px",width:"150px"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ###################################################################
function UserInfo(props){
	return (
		<>
			<div className="usr-info" hidden={true}>
				<div id="usr-img" align="center">
					
				</div>
				<br/>
				<p id="usr-name"></p>
				<br/>
				<p id="usr-email"></p>
			</div>
	
		</>
	);	


}

function nouser(){
    var is_m = window.innerWidth<window.innerHeight;
    if (is_m){
       var x=document.getElementsByClassName('login-m')[0];
        x.hidden=false;

    }else{
         var x=document.getElementsByClassName('login')[0];
         x.hidden=false;
    }
}

function userloged(){
     
    if (document.getElementsByClassName('usr-info')[0].hidden){
		var x=document.getElementsByClassName('usr-info')[0];
	    x.hidden=false;
	    document.getElementById('usr-img').style.background=`url(${this.state.authUser.photoURL})`
	    document.getElementById('usr-name').innerHTML = this.state.authUser.displayName;
	  	document.getElementById('usr-email').innerHTML = this.state.authUser.email;

    }else{
		var x=document.getElementsByClassName('usr-info')[0];
		x.hidden=true;
    }
}
//###############################################################################

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = { authUser : null };

        // const app = initializeApp(firebaseConfig);

        // console.log(firebase)
        this.firebaseConfig = {
            apiKey: "AIzaSyCu470ly6EqfxhiiUSYcqcs9Myf9V8YJdg",
            authDomain: "thelinuxpointdata.firebaseapp.com",
            databaseURL: "https://thelinuxpointdata-default-rtdb.firebaseio.com",
            projectId: "thelinuxpointdata",
            storageBucket: "thelinuxpointdata.appspot.com",
            messagingSenderId: "941126756395",
            appId: "1:941126756395:web:a809387bb8db65c37f226e",
            measurementId: "G-VJKQN5QK13"
        };
   
        this.app = initializeApp(this.firebaseConfig);
        this.analytics = getAnalytics(this.app);
        this.auth = getAuth();
    }
   
    componentDidMount(){
        var x = document.getElementsByClassName('login')[0]
        if(window.innerHeight>window.innerWidth && x!=null){
            x.className+="-m"
        }
        var y = document.getElementsByClassName('signup')[0]
        if(window.innerHeight>window.innerWidth && y!=null){
            y.className+="-m"
        }
        
        this.listener = this.auth.onAuthStateChanged( authUser=>{
            localStorage.setItem('authUser',JSON.stringify(authUser));
            this.setState({authUser});
            if (authUser==null){

            }else{

                var log = document.getElementsByClassName('account-inner')[0]
                if(log!=null){
          
                log.className+="-signed";
                    document.getElementsByClassName('account-inner-signed')[0].style.background=`url(${this.state.authUser.photoURL})`
                    document.getElementsByClassName('account-inner-signed')[0].style.backgroundSize=`contain`
                
                }
            }
        },
        ()=>{
            localStorage.removeItem('authUser');
            this.setState({authUser:null})
        }
        );   

    }

    componentWillUnmount(){

    }


    render(){
    
    var Showup = React.lazy(() => import('./Components/Showup')); //

	let	func = this.state.authUser ? userloged : nouser;
    var Element = 
                <>
                    <NavBar handler={func.bind(this)}/>
                    <React.Suspense fallback={<Spin/>}>
                        <Showup/>     
                    </React.Suspense>
                    <br/>
                    <br/>
                    <Flap/>
                    <Login/>
                    <Signup/>
					<UserInfo/>
                </>

        window.scrollTo(0,0);
    return (
        <div className="App">
        {/*###################################################*/}
            <Router basename="/">

                <Route exact path="/">
                    <Redirect to="/dashboard" />
                </Route>

                <Switch>

                    <Route path="/dashboard">
                    <Helmet>
                        <title>The Linux Point</title>
                        <meta name="description" content="your it hub ,thelinuxpoint is here" />
                    </Helmet>
                        {Element}
                    </Route>

                    <Route path="/crypto">
                        <Route exact path="/crypto">
                            <Redirect to="/crypto/intro" />
                        </Route>
                        <Switch>
                            <Route path="/crypto/intro">
                                <CryptoIntro/>
                            </Route>
                            <Route path="/crypto/ecc">
                                <CryptoECC/>
                            </Route>
                             <Route path="/crypto/rsa">
                                <CryptoRSA/>
                            </Route>
                        </Switch>
                        <HomeCrypto/>
                    </Route>

                {/*Start the c++ Programming Guide*/}

                    <Route path="/cpp">
                        <Route exact path="/cpp">
                            <Redirect to="/cpp/intro" />
                        </Route>
                        <Switch>
                            <Route path="/cpp/intro">
                                <IntroCpp/>
                            </Route>

                        </Switch>
                        <HomeCpp/>
                    </Route>

                {/*Start the Ruby Programming Guide*/}
                    <Route path="/ruby"> 
                        <Route exact path="/ruby">
                            <Redirect to="/ruby/intro" />
                        </Route>
                        <Switch>
                            <Route path="/ruby/intro">
                                <RubyIntro/>
                            </Route>
                            <Route path="/ruby/methods">
                                <RubyFunc/>
                            </Route>
                            <Route path="/ruby/literal">
                                <RubyLtrl/>
                            </Route>
                        </Switch>
                        <HomeRuby/>
                    </Route>
                {/*Start the Bash Programming Guide*/}
                    <Route path="/bash">
                        <Route exact path="/bash">
                            <Redirect to="/bash/intro" />
                        </Route>
                        <Switch>
                            <Route path="/bash/concept">
                                <BashConcept/>
                            </Route>
                            <Route path="/bash/intro">
                                <BashIntro/>
                            </Route>
                            <Route path="/bash/conditional">
                                <BashConditional/>
                            </Route>
                            <Route path="/bash/loops">
                                <BashLoops/>
                            </Route>
                            <Route path="/bash/variable">
                                <BashVar/>
                            </Route>
                        </Switch>
                        <HomeBash/>
                    </Route>
                    {/*Start the PHP Programming Guide*/}
                    <Route path="/php">
                        <Route exact path="/php">
                            <Redirect to="/php/intro" />
                        </Route>
                        <Switch>
                            <Route path="/bash/intro">
                                <IntroPHP/>
                            </Route>
                        </Switch>
                        <HomePHP/>
                    </Route>
                    {/*Batch Programming*/}

                    <Route path="/batch">
                        <Route exact path="/batch">
                            <Redirect to="/batch/intro" />
                        </Route>
                        <Switch>
                            <Route path="/batch/variable">
                                <BatchVar/>
                            </Route>
                            <Route path="/batch/intro">
                                <BatchIntro/>
                            </Route>
                        </Switch>
                        <HomeBatch/>
                    </Route>
                    
                    {/*ML*/}
                    <Route path="/machine/statistics"> 
                        <Route exact path="/machine/statistics">
                            <Redirect to="/machine/statistics/intro" />
                        </Route>
                        <Switch>
                            <Route path="/machine/statistics/intro">
                                <ProbIntro/>
                            </Route>
                            <Route path="/machine/statistics/functions">
                                <ProbFunc/>
                            </Route>
                        </Switch>
                        <HomeProb/>
                    </Route>

                     <Route path="/machine/algo"> 
                        <Route exact path="/machine/algo">
                            <Redirect to="/machine/algo/introduction" />
                        </Route>
                        <Switch>
                            <Route path="/machine/algo/introduction">
                                <MacAlIntro/>
                            </Route>
                             <Route path="/machine/algo/linear">
                                <MacAlLinear/>
                            </Route>
                             <Route path="/machine/algo/decision">
                                <MacAlDecision/>
                            </Route>
                            <Route path="/machine/algo/svm">
                                <MacAlSVM/>
                            </Route>
                            
                        </Switch>
                        <HomeMac/>
                    </Route>
                    <Route path="/machine/neural"> 
                        <Route exact path="/machine/neural">
                            <Redirect to="/machine/neural/introduction" />
                        </Route>
                        <Switch>
                            <Route path="/machine/neural/introduction">
                                <NeuralIntro/>
                            </Route> 
                            <Route path="/machine/neural/dimension">
                                <NeuralDim/>
                            </Route>
                            <Route path="/machine/neural/activation">
                                <NeuralAct/>
                            </Route>                     
                        </Switch>
                        <HomeNeural/>

                    </Route>
                    {/*Java Programming Starts here*/}
                    <Route path="/java"> 
                        <Route exact path="/java">
                            <Redirect to="/java/intro" />
                        </Route>
                        <HomeJava/>
                    </Route>
                    {/**/}
                    <Route path="/linuxcommand"> 
                        <Route exact path="/linuxcommand">
                            <Redirect to="/linuxcommand/home" />
                        </Route>
                        <LinxHome/>
                    </Route>
                {/*WEB3 FOLDER*/}
                    <Route path="/web3/solidity"> 
                        <Route exact path="/web3/solidity">
                            <Redirect to="/web3/solidity/intro" />
                        </Route>
                        <Switch>
                            <Route path="/web3/solidity/intro">
                                <SolIntro/>
                            </Route>
                             <Route path="/web3/solidity/types">
                                <SolTypes/>
                            </Route>
                             <Route path="/web3/solidity/function">
                                <SolFunc/>
                            </Route>
                            <Route path="/web3/solidity/contract">
                                <SolContract/>
                            </Route>
                        </Switch>
                        <HomeSol/>
                    </Route>
                {/*WEB FOLDER*/}
                    <Route path="/web/sql"> 
                        <Route exact path="/web/sql">
                            <Redirect to="/web/sql/home" />
                        </Route>
                        <Switch>
                            <Route path="/web/sql/home">
                                <SqlIntro/>
                            </Route>
                            <Route path="/web/sql/create">
                                <SqlCreate/>
                            </Route>
                            <Route path="/web/sql/table">
                                <SqlTable/>
                            </Route>
                        </Switch>
                        <HomeSql/>
                    </Route>
                 {/*React */}
                    <Route path="/web/react"> 
                        <Route exact path="/web/react">
                            <Redirect to="/web/react/home" />
                        </Route>
                        <Switch>
                            <Route path="/web/react/home">
                                <ReactIntro/>
                            </Route>
                        </Switch>
                        <HomeReact/>
                    </Route>
 					{/*ETH*/}					
 					<Route path="/eth"> 
                        <Route exact path="/eth">
                            <Redirect to="/eth/intro" />
                        </Route>
                        <Switch>
                            <Route path="/eth/intro">
                                <EthIntro/>
                            </Route>
                             <Route path="/eth/recon/tools">
                                <EthReconTools/>
                            </Route>
                        </Switch>
                        <HomeEth/>
                    </Route>


                    {/**/}
                    <Route path="/extender"> 
                        <Extender/>
                    </Route>
                    {/**/}
                    <Route path="/resume"> 
                        <Resume/>
                    </Route>
                </Switch>

            </Router>
        {/*###################################################*/}

        </div>
    );
    }
}

export default App;
