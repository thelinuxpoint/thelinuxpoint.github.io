import React from 'react';
import {NavLink} from "react-router-dom";
import ReactEmbedGist from 'react-embed-gist';

class Shell extends React.Component{
	constructor(props){
		super(props)
		this.element = []
		this.refined = this.props.desc.split(" ")
		this.mark()
	}

	mark(){
		var color="white"
		for (let i of this.refined){
			if (i=="tlp:red"){
				color="red"
				continue
			}else if(i=="tlp:cyan"){
				color="cyan"
				continue
			}else if(i=="tlp:lime"){
				color="lime"
				continue
			}else if(i=="tlp:violet"){
				color="violet"
				continue
			}else if(i=="tlp:org"){
				color="orange"
				continue
			}else if(i=="tlp:br"){
				this.element.push(<br/>)

				continue
			}else if(i=="tlp:yellow"){
				color="yellow"
				continue
			}else if(i=="~$"){
				this.element.push(<span style={{color:`${color}`,userSelect:"none"}}>{" "+i+" "}</span>)
				color="white";
				continue
			}
			this.element.push(<span style={{color:`${color}`}}>{" "+i+" "}</span>)
			color="white";

		}

	}

	render(){
		return(
			<>
				<div className="mark-down">
					<div className="shell-box">
						<p className="shell-type">{this.element}</p>
					</div>
				</div>
			</>
		);
	}
}



export default Shell;
