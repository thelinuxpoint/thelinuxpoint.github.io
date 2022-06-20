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
function FlapRuby(props){
	return(
		<>
		<div className="flap-ruby">
			<div className="display">
				<img src="https://thelinuxpoint.github.io/ruby.png" style={{width:"150px",height:"150px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink to="/ruby/intro" className="descr"><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/ruby/keywords" className="descr"><p>Keywords</p></NavLink>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink to="/ruby/literal" className="descr"><p>Literals</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/ruby/methods" className="descr"><p>Function</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/ruby/condition" className="descr"><p>Conditional</p></NavLink>
			</div>	
			<hr/>
			<div className="topic">
				<NavLink to="/ruby/exception" className="descr"><p>Exception</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/ruby/class" className="descr"><p>Classes</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/ruby/modules" className="descr"><p>Modules</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/ruby/advance" className="descr"><p>Advance Concepts</p></NavLink>
			</div>
			<hr/>
			<Author/>
		</div>
		</>
	);
}

export default FlapRuby;
