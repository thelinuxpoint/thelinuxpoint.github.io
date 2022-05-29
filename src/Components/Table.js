import React from 'react';
import {NavLink} from "react-router-dom";

class Table extends React.Component{
	constructor(props){
		super(props)
		this.columns=[]
		this.elements=[]
		this.refined = this.props.desc.split(";")
		for (let i of this.refined){
			this.columns.push(i.split(" "));
		}
		this.colsp = this.props.colsp;
		console.log(this.columns);
		this.mark()
	}
	mark(){
		var start = false;
		for(let j of this.columns){
			var local_str=""
			this.elements.push(<tr/>)
			for(let k of j){
				if(k=="-"){ start=true;continue;}else if(k=="|"){start=false;this.elements.push(<td className="tad">{local_str}</td>);local_str="";continue; }
				if(start==true){
					local_str+=k+" "
					console.log(local_str)
				}else{
					this.elements.push(<td colSpan="1" className="tad">{k}</td>);
				}
			}
		}
	}
	render(){
		return(
			<>
				<br/>
				<table className="put-in-side-code table-c">
    				<thead className="theader">
        				<tr>
            				<th colSpan={this.colsp}>{this.props.head}</th>
        				</tr>
    				</thead>
    				<tbody>
    					{this.elements}	
    				</tbody>
				</table>
				<br/>
				
			</>
		);
	}
}

export default Table;
