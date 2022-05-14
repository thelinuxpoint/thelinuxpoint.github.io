import React from 'react';
import {NavLink} from "react-router-dom";
import Mark from "../../Components/Markdown";
import Head from "../../Components/Header";
import ReactEmbedGist from 'react-embed-gist';
import Shell from "../../Components/Shell";
import Table from "../../Components/Table";

export default function IntroCpp(){
	return(
		<>
			<Head name="Installing the Compiler"/>
			<Mark desc="The default Ubuntu repositories contain a meta-package named tlp:box “build-essential” that includes the GNU compiler collection, GNU debugger, and other development libraries and tools required for compiling software. To install the Development Tools packages, run the following command as root or user with sudo privileges :"/>
			<Shell desc="sudo apt update tlp:br tlp:br tlp:lime ~$ sudo apt install build-essential "/>
			<Mark desc="The command installs a lot of packages, including tlp:cyan gcc , tlp:cyan g++ and tlp:cyan make"/>
			<Head name="Compiling a Hello World Code:"/>
			<Mark desc='tlp:codes # // # hello.cpp tlp:br tlp:br tlp:red #include tlp:yellow <iostream> tlp:br tlp:br tlp:cyan int main() { tlp:br tlp:tab std::cout<< tlp:yellow "Hello tlp:yellow World!" <<std::endl; tlp:br tlp:tab tlp:red return 0; tlp:br } tlp:codee tlp:br tlp:br now compile and run using the following commands:'/>
			<Shell desc="g++ hello.cpp tlp:br tlp:br tlp:lime ~$ ./a.out"/>
			<Head name="Static Linking"/>
			<Head name="Dynamic Linking"/>

		</>
	);
}
