import React from 'react';
import {NavLink} from "react-router-dom";
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
import ReactEmbedGist from 'react-embed-gist';
import Shell from "../../Components/Shell";
import Table from "../../Components/Table";
import { Helmet } from 'react-helmet';

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
		document.getElementsByClassName('flap-sql')[0].style.left="-300px";
		if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
            	}
	}
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
function FlapSql(props){
	return(
		<>
		<div className="flap-sql">
			<div className="display">
				<img src="https://thelinuxpoint.github.io/sql.png" style={{width:"200px",height:"150px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/web/sql/home" className="descr"><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN}  to="/web/sql/datatypes" className="descr"><p>Data Types</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/web/sql/create" className="descr"><p>Create & Drop DB</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/web/sql/table" className="descr"><p>Create Table</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/web/sql/select" className="descr"><p>Select</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/web/sql/logical" className="descr"><p>Logical Operators</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/web/sql/insert" className="descr"><p>Insert Into</p></NavLink>
			</div>
			<hr/>

			<Author/>
		</div>
		</>
	);
}

function HomeSql(props){
	return(
		<>
		<div className="">
			
			<FlapSql/>
			<div id="hambure" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-sql')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-sql')[0].style.left="-300px"
            	}
           
            }}>
                <div id="ham-1"></div>
                <div id="ham-2"></div>
                <div id="ham-3"></div>
			</div>
		</div>
		</>
	);
}

function SqlIntro(props){
	return(
		<>
			<Helmet>
        		<title>MySQL - Introduction</title>
        		<meta name="description" content="Learn basics about sql"/>
	      	</Helmet>
			<br/>
			<Head id="" name="Introduction to MySQL"/>
			<Mark desc=" MySQL, the most popular Open Source SQL database management system, is developed, distributed, and supported by Oracle Corporation. The MySQL website ( tlp:cyan http://www.mysql.com/ ) provides the latest information about MySQL software. "/>
			<Mark desc="For Debian-based Linux platforms, MySQL can be installed using the MySQL APT Repository."/>
			<Shell desc="tlp:cyan sudo tlp:cyan apt-get install mysql-server"/>
			<Mark desc=" This installs the package for the MySQL server, as well as the packages for the client and for the database common files. tlp:br During the installation, you are asked to supply a password for the root user for your MySQL installation. The MySQL server is started automatically after installation. You can check the status of the MySQL server with the following command: "/>
			<Shell desc="tlp:cyan systemctl mysql status"/>
			<br/>
			<Navigator left="" right=""/>

		</>
	);
}

function SqlCreate(props){
	return(
		<>
			<Helmet>
        		<title>MySQL - CREATE DATABASE</title>
        		<meta name="description" content="Learn basics about sql"/>
	      	</Helmet>
			<br/>
			<Head id="" name="Creating Database in MySQL"/>
			<Mark desc="Under Unix, database names are case-sensitive (unlike SQL keywords), so you must always refer to your database as myDB, not as MYDB, MyDB, or some other variant. This is also true for table names. (Under Windows, this restriction does not apply, although you must refer to databases and tables using the same lettercase throughout a given query. However, for a variety of reasons, the recommended best practice is always to use the same lettercase that was used when the database was created.) "/>
			<Shell desc="tlp:lime CREATE tlp:lime DATABASE myDB;"/>

			<Mark desc="creating a database does not select it so we have to use the  tlp:lime use command to make myDB as your current database. tlp:br no need of semicolon at the end in use command."/>
			<Shell desc="tlp:lime USE myDB"/>
			<Mark desc="You can view you database by using the following command:"/>
			<Shell desc="tlp:lime SHOW tlp:lime DATABASES ;"/>			
			<Mark desc="# RESULT"/>

			<Table head="Database" colsp={1} desc="- myDB |"/>
			<Head id="" name="Droping Database in MySQL"/>
			<Mark desc="The tlp:lime DROP tlp:lime DATABASE statement is used to drop an existing SQL database."/>
			<Shell desc="tlp:lime DROP tlp:lime DATABASE myDB;"/>			
			<Mark desc="# RESULT"/>

			<Table head="Database" colsp={1} desc="-   |"/>
			<Mark desc="tlp:cyan Note : Be careful before dropping a database. Deleting a database will result in loss of complete information stored in the database!"/>
			
			<br/>
			<Navigator left="" right=""/>

		</>
	);
}
function SqlTable(props){
	return(
		<>
			<Helmet>
        		<title>MySQL - CREATE TABLE</title>
        		<meta name="description" content="Learn basics about sql"/>
	      	</Helmet>
			<br/>
			<Head id="" name="Creating Table in MySQL"/>
			<Mark desc="Tables are called as the tlp:cyan entity. The row of a table is called as TUPLE or RECORD and columns are called as tlp:cyan attributes."/>

			<Mark desc="tlp:lime CREATE tlp:lime TABLE Person ( tlp:br
    			tlp:tab PersonID tlp:tab tlp:cyan  int , tlp:br
    			tlp:tab LastName tlp:tab varchar(255) , tlp:br
    			tlp:tab FirstName tlp:tab varchar(255) tlp:br
			);"/>
			<Shell desc="tlp:lime SELECT tlp:org * tlp:lime FROM Person;"/>			
			<Table head="Database (myDB)" colsp={3} desc="- PersonID | - LastName | - FirstName |"/>
			<Mark desc="Now lets add some data to the table Person tlp:br tlp:br 
			tlp:lime INSERT tlp:lime INTO Person (PersonID, LastName, FirstName)
			tlp:lime VALUES ( 1 , tlp:yellow 'Choudhary' , tlp:yellow 'Prakash' );	


			"/>
			<Head name="Creating Table With Constraints"/>
			<Mark desc=" tlp:lime CREATE tlp:lime TABLE Person ( tlp:br
    		tlp:tab PersonID tlp:tab int tlp:red NOT tlp:red NULL , tlp:br
    		tlp:tab LastName tlp:tab varchar(255) tlp:red NOT tlp:red NULL , tlp:br
    		tlp:tab FirstName tlp:tab varchar(255) tlp:red NOT tlp:red NULL tlp:br
			); "/>
			<br/>
			<Navigator left="" right=""/>


		</>
	);
}
function SqlLogical(props){
	return(
		<>
			<Helmet>
        		<title>MySQL - LOGICAL OPERATIONS</title>
        		<meta name="description" content="Learn basics about sql"/>
	      	</Helmet>
			<br/>
			<Mark desc=""/>
			<br/>
			<Navigator left="" right=""/>


		</>
	);
}

function SqlOperator(props){
	return(
		<>
			<Helmet>
        		<title>MySQL - Operators</title>
        		<meta name="description" content="Learn basics about sql"/>
	      	</Helmet>
			<br/>
			
			<br/>
			<Navigator left="" right=""/>


		</>
	);
}
function SqlWhere(props){
	return(
		<>
			<Helmet>
        		<title>MySQL - WHERE CLAUSE</title>
        		<meta name="description" content="Learn basics about sql"/>
	      	</Helmet>
			<br/>
			
			<br/>
			<Navigator left="" right=""/>


		</>
	);
}
function SqlSelect(props){
	return(
		<>
			<Helmet>
        		<title>MySQL - SELECT</title>
        		<meta name="description" content="Learn basics about sql"/>
	      	</Helmet>
			<br/>
			
			<br/>
			<Navigator left="" right=""/>


		</>
	);
}

export 
{
	HomeSql,SqlIntro,SqlCreate,SqlTable,SqlOperator,
	SqlWhere,SqlSelect,SqlLogical
};
