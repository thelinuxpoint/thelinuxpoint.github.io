import React from 'react';
import {NavLink} from "react-router-dom";
import ReactEmbedGist from 'react-embed-gist';

class Mark extends React.Component{
	constructor(props){
		super(props)
		this.element = []
		this.code = []
		this.refined = this.props.desc.split(" ")
		this.mark()
	}
	mark(){

		var border="";
		var backGC="";
		var color="#bcbdd0";
		var space=" ";
		var style="normal"
		var link=false;
		var code = false
		for (let i of this.refined){
			if (i==="tlp:box"){
				border="3px";
				backGC="grey";
				space="";
				color="white"
				style="normal"

				continue
			}else if(i==="tlp:red"){
				color="red";
				continue
			}else if(i==="tlp:org"){
				color="orange";
				continue
			}else if(i==="tlp:cyan"){
				color="#76a3ff";
				continue
			}else if(i==="tlp:yellow"){
				color="#afaf08";
				continue
			}else if(i==="tlp:lime"){
				color="lime";
				continue
			}else if(i==="tlp:violet"){
				color="violet";
				continue
			}else if(i==="tlp:tab"){
				if (code){this.code.push(<pre style={{display:"inline"}}>    </pre>)}
				else{this.element.push(<pre style={{display:"inline"}}>    </pre>)}
				continue
			}else if(i==="tlp:link"){
				color="skyblue";
				link=true;
				continue
			}else if(i==="tlp:br"){
				if(code){this.code.push(<br/>)}
				else{this.element.push(<br/>)}
				continue
			}else if(i==="tlp:codes"){
				code = true;
				continue
			}else if(i==="tlp:codee"){
				code = false;
				this.element.push(<div className="shell-boxx">{this.code}</div>)
				this.code=[];
				continue
			}else if(i==="#"){
				color="grey"
				continue
			}else if(code){
				this.code.push(<span style={{color:`${color}`,borderRadius:`${border}`,backgroundColor:`${backGC}`,fontStyle:`${style}`}}>{space+i+space}</span>)
				border="0px";
				backGC="none";
				color="#bcbdd0";
				space=" ";
				style="normal"
				continue
			}
			else if(link){
				this.element.push(<a style={{color:`${color}`,borderRadius:`${border}`,backgroundColor:`${backGC}`,fontStyle:`${style}`}} href={i}>{i}</a>)
				link=false
				color="#bcbdd0"
				continue
			}
			this.element.push(<span style={{color:`${color}`,fontFamily:"Open Sans",borderRadius:`${border}`,backgroundColor:`${backGC}`,fontStyle:`${style}`}}>{space+i+space}</span>)
			border="0px";
			backGC="none";
			color="#bcbdd0";
			space=" ";
			style="normal"
		}
	}
	render(){
		return(
			<>
				<div className="mark-down">
					<p>{this.element}</p>
				</div>
			</>
		);
	}
}



export default Mark;
