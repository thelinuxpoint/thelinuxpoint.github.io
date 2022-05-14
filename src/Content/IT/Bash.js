import React from 'react';
import {NavLink} from "react-router-dom";
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
import ReactEmbedGist from 'react-embed-gist';
import Shell from "../../Components/Shell";
import Table from "../../Components/Table";
import { Helmet } from 'react-helmet';


function slideIN(){
	if(window.innerHeight>window.innerWidth){
		document.getElementsByClassName('flap-bash')[0].style.left="-300px";
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
function FlapBash(props){
	return(
		<>
		<div className="flap-bash">
			<div className="display">
				<img src="https://thelinuxpoint.github.io/shell.png" style={{width:"150px",height:"150px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/bash/intro" className="descr"><p>Introduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/bash/concept" className="descr"><p>Concepts</p></NavLink>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/bash/variable" className="descr"><p>Declare Types</p></NavLink>
			</div>			
			<hr/>
			<div className="topic">
				<p>Arithmatic</p>
			</div>
			<hr/>
			<div className="topic">
				<p>String</p>
			</div>
			<hr/>
			<div className="topic">
				<p>Array</p>
			</div>
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/bash/conditional" className="descr"><p>Conditional</p></NavLink>
			</div>	
			<hr/>
			<div className="topic">
				<NavLink onClick={slideIN} to="/bash/loops" className="descr"><p>Loops</p></NavLink>
			</div>
			<hr/>
			<div className="topic">
				<p>Commands</p>
			</div>
			<hr/>
			<Author/>
		</div>
		</>
	);
}


function HomeBash(props){
	window.scrollTo(0,0);
	return(
		<>
		<div className="">
			
			<FlapBash/>
			<div id="hamburx" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-bash')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-bash')[0].style.left="-300px"
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
function BashIntro(props){
	window.scrollTo(0,0)
	return(
		<>
			<Helmet>
        		<title>Bashscript Introduction</title>
        		<meta name="description" content="Learn basics about bashscript such as shabang, options, flags" />
	      	</Helmet>
			<Head id="" name="Introduction to Bash"/>
			<Mark desc="Bash is the shell, or command language interpreter, for the GNU operating system. The name is an acronym for the tlp:lime ‘Bourne-Again-Shell’
			Bash Shell behaves more or less likely a programming language. It has some interactive features which include job control, command line editing, command history and aliases
			"/>
			<Head id="" name="ShaBang"/>
			
			<Mark desc="tlp:cyan #!interpreter-path [optional-arg] tlp:br tlp:br shabang is the character sequence consisting of the characters number sign and exclamation mark ( tlp:box #! ) at the beginning of a script. It is also called sha-bang. When a text file with a shebang is used as if it is an executable in a Unix-like operating system, the program loader mechanism parses the rest of the file's initial line as an interpreter directive. The loader executes the specified interpreter program, passing to it as an argument the path that was initially used when attempting to run the script, so that the program may use the file as input data.
	     	tlp:br tlp:br tlp:lime (1) tlp:box #!/bin/sh – Execute the file using the Bourne shell, or a compatible shell, assumed to be in the /bin directory.
			tlp:br tlp:br tlp:lime (2) tlp:box #!/bin/bash – Execute the file using the Bash shell. 
			tlp:br tlp:br tlp:lime (3) tlp:box #!/usr/bin/pwsh – Execute the file using PowerShell.
			tlp:br tlp:br tlp:lime (4) tlp:box #!/usr/bin/python3 – Execute the file using python3 interpreter.
			tlp:br tlp:br And Many More ... tlp:br tlp:br Create a file name 'waste' which will be contanning python code tlp:red notice that how we have not used extention tlp:cyan .py here.
			"/>
			<Shell desc="tlp:cyan touch waste tlp:red && tlp:cyan chmod +x waste"/>
			<div className="put-in-side-code">
				<ReactEmbedGist gist="thelinuxpoint/1190b47edda3685593803f63499b57ae"/>
			</div>
			<Shell desc="./waste"/>
			<Mark desc="# output tlp:br tlp:br Sha Bang Example"/>

			<Head id="" name="Options or Flags"/>			
			<Mark desc="Basically commands in Bash Script has there mode which can be enabled by
			the options (flags) of that command by pressing `-` and a caracter(s) following it.
			some options may also accept arguments after it.
			"/>
			<Shell desc="tlp:cyan command -h"/><br/>
			<Navigator left="/bash/intro" right="/bash/concept"/>


		</>
	);
}
function BashConcept(props){
	window.scrollTo(0,0)
	return(
		<>
			<Helmet>
        		<title>Bashscript Operators</title>
        		<meta name="description" content="Learn basics about operators such as |  > >> " />
	      	</Helmet>
			<Head id="" name="Control Operators"/>
			<Mark desc="A token that performs a control function. It is a newline or one of the following: tlp:br ‘||’, ‘&&’, ‘&’, ‘;’, ‘;;’, ‘;&’, ‘;;&’, ‘|’, ‘|&’, ‘(’, or ‘)’."/>
			<Mark desc="(1) tlp:red && - AND operator
			tlp:br tlp:br here command2 is executed if, and only if, command1 returns an exit status of zero (i.e success)."/>
			<Shell desc="tlp:cyan command1 tlp:red && tlp:cyan command2"/>
			
			<Mark desc="(2) tlp:red || - OR operator tlp:br tlp:br here command2 is executed if, and only if, command1 returns a non-zero exit status."/>
			<Shell desc="tlp:cyan command1 tlp:red || tlp:cyan command2"/>
			
			<Mark desc="(3) tlp:red | - PIPE operator tlp:br tlp:br here the content of file ('textfile') dumped by cat command and is given to grep and it search for 'hello' pattern in file's output."/>
			<Shell desc="tlp:cyan cat textfile tlp:red | tlp:cyan grep hello"/>
			
			<Mark desc="(4) tlp:red > - Redirecting Output tlp:br tlp:br Redirection of output causes the file whose name results from the expansion of word to be opened for writing on file descriptor n, or the standard output (file descriptor 1) if n is not specified. If the file does not exist it is created; if it does exist it is truncated to zero size.
			The general format for redirecting output is:"/>
			<Shell desc="[n]>[|]word"/>
			
			<Mark desc="(5) tlp:red >> - Appending Redirected Output tlp:br tlp:br Redirection of output in this fashion causes the file whose name results from the expansion of word to be opened for appending on file descriptor n, or the standard output (file descriptor 1) if n is not specified. If the file does not exist it is created.
			The general format for appending output is: "/>
			<Shell desc="[n]>>word"/>

			<Mark desc="(6) tlp:red < - Redirecting Input tlp:br tlp:br "/>

			<Mark desc="(7) tlp:red >& - Redirecting Standard Output & Standard Error tlp:br tlp:br This construct allows both the standard output (file descriptor 1) and the standard error output (file descriptor 2) to be redirected to the file whose name is the expansion of word. "/>
			<Shell desc="tlp:cyan echo tlp:yellow 'hello tlp:yellow world' tlp:red > word tlp:violet 2 tlp:red >& tlp:violet 1"/>

			<Mark desc="(8) tlp:red & - Spawning multiple Process tlp:br tlp:br "/>

			<Mark desc="(9) tlp:red `` or tlp:red $() - Execution Operator tlp:br tlp:br "/>

			<Mark desc="(10) tlp:red <() - Input Redirecting from Subshell tlp:br tlp:br "/>

			<Mark desc="(11) tlp:red << - Heredoc tlp:br tlp:br "/>
		
			<Mark desc="(12) tlp:red <<< - Herestring tlp:br tlp:br "/>
			<br/>
			<Navigator left="/bash/intro" right="/bash/variable"/>

		</>
	);
}

function BashConditional(props){
	window.scrollTo(0,0)
	return(
		<>
			<Helmet>
        		<title>Bashscript Conditional</title>
        		<meta name="description" content="Learn basics about conditional statements such as if else loop case ,select" />
	      	</Helmet>
			<Head id="" name="Conditional Statements"/>
			<Mark desc="Bashscript has some conditional statements such as tlp:red if tlp:red else & tlp:red case which can be usefull in making a script."/>
			<Head id="" name="The if ... else loop"/>
			<Mark desc="At times you need to specify different courses of action to be taken in a shell script, depending on the success or failure of a command. The if construction allows you to specify such conditions. tlp:br 
				tlp:br tlp:cyan Syntax: tlp:br tlp:br tlp:red if [ expr ]; tlp:red then tlp:br
				# statements tlp:br
				tlp:red elif [ expr ] ; tlp:red then tlp:br 
				# statements tlp:br
				tlp:red else tlp:br
				# statements tlp:br
				tlp:red fi
			"/>
				
			<Table head="if condition with flags" colsp={2} desc="-  [ -a FILE ] | - True if FILE exists. |;- [ -b FILE ] | - True if FILE exists and is a block-special file. |;- [ -c FILE ] | - True if FILE exists and is a character-special file. |;- [ -d FILE ] | - True if FILE exists and is a directory. |;- [ -e FILE ] | - True if FILE exists. |;- [ -f FILE ] | - True if FILE exists and is a regular file. |;- [ -g FILE ] | - True if FILE exists and its SGID bit is set. |;- [ -h FILE ] | - True if FILE exists and is a symbolic link. |;- [ -k FILE ] | - True if FILE exists and its sticky bit is set. |;- [ -p FILE ] | - True if FILE exists and is a named pipe (FIFO). |;- [ -r FILE ] | - True if FILE exists and is readable. |;- [ -s FILE ] | - True if FILE exists and has a size greater than zero. |;- [ -t FD ] | - True if file descriptor FD is open and refers to a terminal. |;- [ -u FILE ] | - True if FILE exists and its SUID (set user ID) bit is set. |;- [ -w FILE ] | - True if FILE exists and is writable. |;- [ -x FILE ] | - True if FILE exists and is executable. |;- [ -O FILE ] | - True if FILE exists and is owned by the effective user ID. |;- [ -G FILE ] | - True if FILE exists and is owned by the effective group ID. |;- [ -L FILE ] | - True if FILE exists and is a symbolic link. |;- [ -N FILE ] | - True if FILE exists and has been modified since it was last read. |;- [ -S FILE ] | - True if FILE exists and is a socket. |;- [ FILE1 -nt FILE2 ] | - True if FILE1 has been changed more recently than FILE2, or if FILE1 exists and FILE2 does not. |;- [ FILE1 -ot FILE2 ] | - True if FILE1 is older than FILE2, or is FILE2 exists and FILE1 does not. |;- [ FILE1 -ef FILE2 ] | - True if FILE1 and FILE2 refer to the same device and inode numbers. |;- [ -z STRING ] | - True of the length if 'STRING' is zero. |;- [ -n STRING ] or [ STRING ] | - True if the length of 'STRING' is non-zero. |;-"/>
			<Mark desc="example to try"/>
			<div className="put-in-side-code">
				<ReactEmbedGist gist="/thelinuxpoint/d67a79454075149b4eac0998817a778e"/>
			</div>

			<Mark desc="In square brackets of if ... elif statements STRINGS can be compared using operator such as tlp:red == , tlp:red != and tlp:red < , tlp:red >"/>
			<Mark desc="we can not use operators for arithmatic operations on integers instead we use flags which are as follows : tlp:br tlp:br  [ ARG1 op ARG2 ]"/>
			<Table head="Arithmatic Comparision Flags" colsp={2} desc="- -eq | - Equal to (==) |;- -ne | - Not Equal To (!=) |;- -gt | - Greater than (>) |;- -ge | - Greater than Equal to (>=) |;- -lt | - Less than (<) |;- -le | - Less than equal to (<=) |;-"/>

 			<Mark desc="example to try"/>

			<div className="put-in-side-code">
				<ReactEmbedGist gist="thelinuxpoint/51fffcf59d6412cc7ff0016a0857191c"/>
			</div>
			<Head id="" name="The case Statement"/>
			<Mark desc="case will selectively execute the command-list corresponding to the first pattern that matches word. The match is performed according to the rules described below in Pattern Matching. tlp:br tlp:br tlp:cyan Syntax: tlp:br tlp:br tlp:red case word tlp:red in tlp:br # patterns pat1 | pat2 ) tlp:br # statements # to # execute # if # matched tlp:br # terminate tlp:red ;; tlp:br tlp:red esac"/>
			<div className="put-in-side-code">
				<ReactEmbedGist gist="thelinuxpoint/138c7c2159c8fbe29573763b0b841991"/>
			</div>
			<Mark desc="If the ‘ tlp:red ;; ’ operator is used, no subsequent matches are attempted after the first pattern match. tlp:br Using ‘ tlp:red ;& ’ in place of ‘ tlp:red ;; ’ causes execution to continue with the command-list associated with the next clause, if any. tlp:br Using ‘ tlp:red ;;& ’ in place of ‘ tlp:red ;; ’ causes the shell to test the patterns in the next clause, if any, and execute any associated command-list on a successful match, continuing the case statement execution as if the pattern list had not matched. "/>
			<Head id="" name="The select statement"/>
			<Mark desc="The select construct allows the easy generation of menus. It has almost the same syntax as the for command:"/>
			<Mark desc="The list of words following in is expanded, generating a list of items. The set of expanded words is printed on the standard error output stream, each preceded by a number. If the ‘in words’ is omitted, the positional parameters are printed, as if ‘in '$@'’ had been specified. "/>
			
			<div className="put-in-side-code">
				<ReactEmbedGist gist="thelinuxpoint/59ec1b7f03e47c64885ecbf7ab15ed05"/>
			</div>
			<br/>
			<Navigator left="/bash/variable" right="/bash/loops"/>

		</>
	);
}

function BashLoops(props){
	window.scrollTo(0,0)
	return(
		<>
			<Helmet>
        		<title>Bashscript Loops</title>
        		<meta name="description" content="Learn basics about loops such as for, until, while" />
	      	</Helmet>
			<Head id="" name="Looping Statements"/>
			<Mark desc="The loops allow programmers to iterate over a set of finite or infinite range to do a specific task."/>
			<Head id="" name="The for Loop"/>

			<Mark desc="The for loop is the first of the three shell looping constructs. This loop allows for specification of a list of values. A list of commands is executed for each value in the list. tlp:br tlp:br Syntax: tlp:br tlp:br tlp:red for i tlp:red in [list] ; tlp:red do tlp:br # commands # here tlp:br tlp:red done tlp:br tlp:br The C Style loop: tlp:br tlp:br tlp:red for ((i=0; i<=n; i++)) ; tlp:red do tlp:br # commands # here tlp:br tlp:red done "/>
			<Head id="" name="The while Loop"/>
			<Mark desc="The while construct allows for repetitive execution of a list of commands, as long as the command controlling the while loop executes successfully (exit status of zero). tlp:br tlp:br Syntax: tlp:br tlp:br tlp:red while control-command ; tlp:red do tlp:br # commands # here tlp:br tlp:red done"/>

			<Head id="" name="The until Loop"/>

		</>
	);
}


function BashVar(props){
	window.scrollTo(0,0)
	return(
		<>
			<Helmet>
        		<title>Bashscript Variables</title>
        		<meta name="description" content="Learn basics about variables in bashscript such as string , integer ,array, float" />
	      	</Helmet>
			<Head id="" name="Type Declaration"/>
			<Mark desc="There are different data types in Bash script such as tlp:cyan Associate tlp:cyan Array , tlp:cyan Indexed tlp:cyan Array , tlp:cyan String , tlp:cyan Integer ."/>
			<Head id="" name="Integer Declaration"/>
			<Mark desc="Integers can be created using many ways: tlp:br tlp:br => using tlp:red declare expression tlp:br tlp:lime"/>
			<Shell desc="tlp:cyan declare tlp:org -i x=10"/>
			<Mark desc="=> using tlp:red let commnand tlp:br let expression allows us to do various aritmatic operation on a variable such as tlp:red = tlp:red ++ tlp:red --  tlp:red +  tlp:red +=  tlp:red -  tlp:red -=  tlp:red *  tlp:red *=  tlp:red /  tlp:red <<  tlp:red >> tlp:red <<= tlp:red >>=  tlp:red !  tlp:red |  tlp:red &&  tlp:red ||  tlp:red &=  tlp:red ^=  tlp:red |= "/>
			<Shell desc="tlp:cyan let x=10 y=10 z=x+y"/>
			<Mark desc="=> The Python style declearation "/>
			<Shell desc="x=10"/>

			<Head id="" name="String Declaration"/>
			<Mark desc="Strings are easy to create in bash script. following are the valid declearation for a string in bash. tlp:br tlp:org Remember: Spaces are consider as delimeter in Bash "/>
			<Mark desc="=> Single quotes ('') are used to preserve the literal value of each character enclosed within the quotes. A single quote may not occur between single quotes, even when preceded by a backslash."/>
			<Shell desc="x='Hello World'"/>
			<Mark desc='=> Double quotes ("") can be used if we need to format a string if y=World and x="Hello $y" then after expansion x="Hello World"'/>
			<Shell desc='y="World" ; x="Hello $y"'/>
			<Mark desc='=> Strings can also be created without quotes but we cant insert spaces in it such as x=Hello World # it # is # an # error tlp:red cause here bash assumes tlp:cyan World as Command after decleartion of x=Hello '/>
			<Shell desc='x=HelloWorld'/>
			<br/>
			<Navigator left="/bash/variable" right="/bash/loops"/>



		</>
	);
}




export {HomeBash,BashIntro,BashConcept,BashConditional,BashLoops,BashVar};

