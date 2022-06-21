import React from 'react';
import {NavLink} from "react-router-dom";


function Card(props){
	
	return (
	<>
	<div className="card-out"align="center">
		<div align="center" className="card-in"><h2>{props.topic}</h2></div>
		<div align="center" className="card-in-d"><p>{props.desc}</p></div>
		<div align="center" className="card-in-go"><p>Go</p></div>
	</div>
	</>
	);
}

export default Card;