import React from 'react';
import {NavLink} from "react-router-dom";
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
import ReactEmbedGist from 'react-embed-gist';
import Shell from "../../Components/Shell";
import Table from "../../Components/Table";
function Author(){
    return(
        <div  style={{color:"white",fontSize:"17px",display:"flex",justifyContent:"space-between",padding:"10px"}}>
            <div draggable={false} className="" title="Visit Youtube Channel" onClick={function(){
                     var x = document.createElement('a');
                     x.href="https://www.youtube.com/channel/UCVYclxop0utX10SW0kOK9Ig";
                     x.click();}}>
                <img src="youtube.dark.min.svg" alt="youtube" style={{'height':'30px','width':'30px'}}/>
            </div>
            <div draggable={false} className="" title="Visit Github" onClick={function(){
                    var x = document.createElement('a');
                     x.href="https://github.com/thelinuxpoint";
                     x.click();}}>
                <img src="github.dark.min.svg" alt="github" style={{'height':'30px','width':'30px'}}/>
            </div>
        </div>
    );
}
function FlapSql(props){
	return(
		<>
		<div className="flap-sql">
			<div className="display">
				<img src="sql.png" style={{width:"200px",height:"150px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink to="/web/sql/home" className="descr"><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/web/sql/" className="descr"><p>Data Types</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/web/sql/create" className="descr"><p>Create & Drop DB</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/web/sql/table" className="descr"><p>Create Table</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/web/sql/" className="descr"><p>Select</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/web/sql/" className="descr"><p>Conditional</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink to="/web/sql/" className="descr"><p>Insert Into</p></NavLink>
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
			<Head id="" name="Introduction to MySQL"/>
			<Mark desc=" MySQL, the most popular Open Source SQL database management system, is developed, distributed, and supported by Oracle Corporation. The MySQL website ( tlp:cyan http://www.mysql.com/ ) provides the latest information about MySQL software. "/>
			<Mark desc="For Debian-based Linux platforms, MySQL can be installed using the MySQL APT Repository."/>
			<Shell desc="tlp:cyan sudo tlp:cyan apt-get install mysql-server"/>
			<Mark desc=" This installs the package for the MySQL server, as well as the packages for the client and for the database common files. tlp:br During the installation, you are asked to supply a password for the root user for your MySQL installation. The MySQL server is started automatically after installation. You can check the status of the MySQL server with the following command: "/>
			<Shell desc="tlp:cyan systemctl mysql status"/>



		</>
	);
}

function SqlCreate(props){
	return(
		<>
			<Head id="" name="Creating Database in MySQL"/>
			<Mark desc="Under Unix, database names are case-sensitive (unlike SQL keywords), so you must always refer to your database as myDB, not as MYDB, MyDB, or some other variant. This is also true for table names. (Under Windows, this restriction does not apply, although you must refer to databases and tables using the same lettercase throughout a given query. However, for a variety of reasons, the recommended best practice is always to use the same lettercase that was used when the database was created.) "/>
			<Shell desc="tlp:red CREATE tlp:red DATABASE myDB;"/>

			<Mark desc="creating a database does not select it so we have to use the  tlp:red use command to make myDB as your current database."/>
			<Shell desc="tlp:red USE myDB"/>
			<Mark desc="no need of semicolon at the end in use command."/>
			<Mark desc="You can view you database by using the following command:"/>
			<Shell desc="tlp:red SHOW tlp:red DATABASES ;"/>			
			<Mark desc="# RESULT"/>

			<Table head="Database" colsp={1} desc="- myDB |"/>
			<Head id="" name="Droping Database in MySQL"/>
			<Mark desc="The tlp:red DROP tlp:red DATABASE statement is used to drop an existing SQL database."/>
			<Shell desc="tlp:red DROP tlp:red DATABASE myDB;"/>			
			<Mark desc="# RESULT"/>

			<Table head="Database" colsp={1} desc="-   |"/>
			<Mark desc="tlp:cyan Note : Be careful before dropping a database. Deleting a database will result in loss of complete information stored in the database!"/>


		</>
	);
}
function SqlTable(props){
	return(
		<>
			<Head id="" name="Creating Table in MySQL"/>



		</>
	);
}
export {HomeSql,SqlIntro,SqlCreate,SqlTable};
