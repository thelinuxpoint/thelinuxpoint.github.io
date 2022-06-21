import React from 'react';
import {NavLink} from "react-router-dom";


function SCard(props){
	
	return (
	<>
	<div className="card-out-s"align="center">
		<div align="center" className="card-in-s"><h2>{props.topic}</h2></div>
		<div align="center" className="card-in-d-s"><p>{props.desc}</p></div>
		<div align="center" className="card-in-go-s"><p>Go</p></div>
	</div>
	</>
	);
}

export default SCard;