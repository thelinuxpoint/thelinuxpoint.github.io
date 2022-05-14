import React from 'react';
import {NavLink} from "react-router-dom";
import ReactEmbedGist from 'react-embed-gist';

class Head extends React.Component{
	constructor(props){
		super(props)

	}

	render(){
		return(
			<>
				<div className="head-down" id={this.props.id}>
					<p className="head-down-desc">{this.props.name}</p>
				</div>
			</>
		);
	}
}



export default Head;
