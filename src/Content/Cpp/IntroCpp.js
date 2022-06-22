import React from 'react';
import {NavLink} from "react-router-dom";
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
import ReactEmbedGist from 'react-embed-gist';
import Shell from "../../Components/Shell";
import Table from "../../Components/Table";
import { Helmet } from 'react-helmet';

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


export default function IntroCpp(){
	window.scrollTo(0,0)
	return(
		<>
			<Helmet>
        		<title>C++ - Introduction</title>
        		<meta name="description" content="Learn basics about C++" />
	      	</Helmet>
			<Head name="Installing the Compiler"/>
			<Mark desc="The default Ubuntu repositories contain a meta-package named tlp:box “build-essential” that includes the GNU compiler collection, GNU debugger, and other development libraries and tools required for compiling software. To install the Development Tools packages, run the following command as root or user with sudo privileges :"/>
			<Shell desc="sudo apt update tlp:br tlp:br tlp:lime ~$ sudo apt install build-essential "/>
			<Mark desc="The command installs a lot of packages, including tlp:cyan gcc , tlp:cyan g++ and tlp:cyan make"/>
			<Head name="Compiling a Hello World Code:"/>
			<Mark desc='tlp:codes # // # hello.cpp tlp:br tlp:br 
			tlp:red #include tlp:yellow <iostream> tlp:br tlp:br 
			tlp:cyan int main() { 
				tlp:br tlp:tab std::cout<< tlp:yellow "Hello tlp:yellow World!" <<std::endl; tlp:br 
				tlp:tab tlp:red return 0; 
				tlp:br } tlp:br
				tlp:codee tlp:br tlp:br 
				
				now compile the code with g++ which will save the executable in a.out file'/>
			<Shell desc="g++ hello.cpp tlp:br tlp:br tlp:lime ~$ ./a.out"/>
			<Head name="Static Linking"/>
			<Mark desc="Static Linking is the result of the linker making copy of all used library functions to the executable file. Static Linking creates larger binary files, and need more space on disk and main memory. Examples of static libraries (libraries which are statically linked) are, tlp:cyan .a files in Linux and tlp:cyan .lib files in Windows."/>
			<Mark desc='tlp:cyan Example tlp:br tlp:br 
			In the Following C++ library file we will decleare a tlp:org add function which we will use it in our main program via static linking.			

			tlp:br tlp:br
			tlp:codes 
			# // # library.hpp tlp:br tlp:br 
			tlp:red #include tlp:yellow <iostream> tlp:br tlp:br
			tlp:yellow #ifdef tlp:yellow __cplusplus tlp:br
			 tlp:tab tlp:red extern tlp:yellow "C" { tlp:br
				tlp:yellow #endif tlp:br tlp:br

			 tlp:cyan int add( tlp:cyan int x, tlp:cyan int y); tlp:br tlp:br
			 tlp:yellow #ifdef tlp:yellow  __cplusplus tlp:br
			 tlp:tab } tlp:br
			 tlp:yellow #endif 
			tlp:codee '/>
			<Mark desc='now lets decleare this function in library.cpp file as follows 
			tlp:br tlp:br
			tlp:codes
			# // # library.cpp tlp:br tlp:br
			tlp:red #include tlp:yellow "library.hpp" tlp:br
			tlp:red #include tlp:yellow <iostream> tlp:br
			tlp:br
			tlp:cyan int add( tlp:cyan int x, tlp:cyan int y) { tlp:br 
				tlp:tab return x+y; tlp:br
			} 
			tlp:br
			tlp:codee
			'/>

			<Shell desc="tlp:cyan g++ -c library.cpp -o library.o tlp:br tlp:br tlp:lime ~$ tlp:cyan ar rcs liblibrary.a library.o"/>
			<Mark desc='Now since liblibrary.a file is generated you can use it in the main program as following
			tlp:br tlp:br 
			tlp:codes
			# // # main.cpp tlp:br tlp:br
				tlp:red #include tlp:yellow <iostream> tlp:br
				tlp:red #include tlp:yellow "library.hpp" tlp:br tlp:br

				tlp:cyan int main() { tlp:br
					tlp:tab tlp:cyan int x = add(1,5); tlp:br
					tlp:tab std::cout<< tlp:yellow "1 tlp:yellow + tlp:yellow 5 tlp:yellow = tlp:yellow " << x <<std::endl; tlp:br
					tlp:tab tlp:red return 0; tlp:br
				} tlp:br 
			tlp:codee tlp:br 
			Now compile main.cpp and link the static file using the following command.
			'/>
			<Shell desc="g++ main.cpp -L . -llibrary.a -o main"/>
			<Mark desc="tlp:org -L indicates where to search for library files "/>
			<Head name="Dynamic Linking"/>
			<Mark desc="Dynamic Linking doesn’t require the code to be copied, it is done by just placing name of the library in the binary file. The actual linking happens when the program is run, when both the binary file and the library are in memory. Examples of Dynamic libraries (libraries which are linked at run-time) are .so in Linux and .dll in Windows."/>
			<Mark desc='tlp:cyan Example tlp:br tlp:br we will create a C++ library file and use it in a C++ code.
			 our library will have a function tlp:org print_hello() which will print "Hello From library".
			 tlp:br tlp:br 
			 tlp:codes 
			 # // # library.hpp tlp:br tlp:br
			 tlp:yellow #ifdef tlp:yellow __cplusplus tlp:br
			 tlp:tab extern "C" { tlp:br
				tlp:yellow #endif tlp:br tlp:br

			 tlp:cyan void print_hello(); tlp:br tlp:br
			 tlp:yellow #ifdef tlp:yellow  __cplusplus tlp:br
			 tlp:tab } tlp:br
			 tlp:yellow #endif 
			 tlp:codee
			tlp:br tlp:br 
			Dont worry about the Macro notation we will study it later in this series. just remember we have print_hello function which is just the decleration of it and we will define this function in library.cpp file.
			tlp:br tlp:br 
			tlp:codes
				# // # library.cpp tlp:br tlp:br
				tlp:red #include tlp:yellow "library.hpp" tlp:br
				tlp:red #include tlp:yellow <iostream> tlp:br
				tlp:br
				tlp:cyan void print_hello() { tlp:br 
					tlp:tab std::cout<< tlp:yellow "Hello tlp:yellow From tlp:yellow Library" <<std::endl; tlp:br
				} 
				tlp:br
			tlp:codee
				now compile the library.cpp file and generate a object file
			'/>
			<Shell desc="tlp:cyan g++ -c -o library.o library.cpp "/>
			<Mark desc="Now create a Shared Object File using the following command."/>
			<Shell desc="tlp:cyan gcc -shared -o liblibrary.so library.o"/>
			<Mark desc='Using The Library tlp:br tlp:br
			tlp:codes
				# // # main.cpp tlp:br tlp:br
				tlp:red #include tlp:yellow "library.hpp" tlp:br tlp:br

				tlp:cyan int main() { tlp:br
					tlp:tab print_hello(); tlp:br
					tlp:tab tlp:red return 0; tlp:br
				} tlp:br 
			tlp:codee
			'/>
			<Shell desc="tlp:cyan g++ -o out main.cpp -llibrary"/>
			<Mark desc="This will generate a executable file named out ."/>
			<br/>
			<Navigator left="/cpp/intro/" right="/cpp/keywords"/>
		</>
	);
}
