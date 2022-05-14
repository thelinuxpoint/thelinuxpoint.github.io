import React from 'react';
import {NavLink} from "react-router-dom";
import ReactEmbedGist from 'react-embed-gist';

import Mark from "../../Components/Markdown";
import FLapRuby from "./FlapRuby";
import Shell from "../../Components/Shell";
import Head from "../../Components/Header";
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
function HomeRuby(props){
	return(
		<>
		<div className="">
			
			<FLapRuby/>
			<div id="hamburx" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-ruby')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-ruby')[0].style.left="-300px"
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

function RubyIntro(props){
	window.scrollTo(0,0)
	return (
		<>
			<Head name="Introduction to Ruby"/>
			<Mark desc="Ruby is an interpreted object-oriented programming language often used for web development. It also offers many scripting features to process plain text and serialized files, or manage system tasks. It is simple, straightforward, and extensible."/>
			<Head name="Download for Debian"/>

			<Shell desc="sudo apt-get install ruby-full"/> 
			<Head name="Build From Source"/>
			<Mark desc="download the latest ruby distribution from tlp:link https://www.ruby-lang.org/en/downloads then u will have to unpack tarball then go to the directory in console and type:"/>
			<Shell desc="./configure tlp:br tlp:lime ~$ make tlp:br tlp:lime ~$ sudo make install"/>



			<Head name="Hello World"/>
			<div className="put-in-side-code">
				<ReactEmbedGist gist="thelinuxpoint/0ecf7ad47870aa3407e5fa545f990224"/>
			</div>
			<Navigator left="/ruby" right="/ruby/keywords"/>
		</>
	);
}
function RubyFunc(props){
	window.scrollTo(0,0)
	return (
		<>
			<Head name="Methods in Ruby"/>
			<Mark desc="The Sandard Syntax to define a method tlp:br tlp:br tlp:codes tlp:red def tlp:org method_name tlp:br tlp:tab tlp:cyan puts 'method called' tlp:br tlp:red end tlp:codee"/>
			<Head name="Methods Arguments"/>
			<Mark desc="A method may accept arguments. the arguement list follows the method name. `,` can be used as argument seperator. when called, the arguments must be provided in the exact order. it means arguments are positional. tlp:br tlp:br tlp:codes tlp:red def tlp:org add (a,b) tlp:br tlp:tab a+b tlp:br tlp:red end tlp:codee tlp:br tlp:br the parentheses around the arguments are optional the above function is same as: tlp:br tlp:br tlp:codes tlp:red def tlp:org add a,b tlp:br tlp:tab a+b tlp:br tlp:red end tlp:codee tlp:br tlp:br arguements May have tlp:cyan Default Values tlp:br tlp:br tlp:codes tlp:red def tlp:org add (a,b=0) tlp:br tlp:tab a+b tlp:br tlp:red end tlp:codee"/>
			<Mark desc="tlp:cyan Array tlp:cyan Decomposition : you can decompose (unpack) a array with extra parentheses in the arguments: tlp:br tlp:br tlp:codes tlp:red def add((x,y)) tlp:br tlp:tab x+y tlp:br tlp:red end tlp:br tlp:cyan add ([1,2])  # ok # ,no # error tlp:codee tlp:br tlp:br tlp:lime Remember: Extra Elements in an array will be ignored." />
			<Mark desc="The arguemnt will be decomposed if it responds to tlp:cyan to_ary method tlp:br tlp:br tlp:codes tlp:red def tlp:org my_method ((a, *b)) tlp:br tlp:tab p a: a, b: b tlp:br tlp:red end tlp:br my_method([1, 2, 3]) tlp:br # prints tlp:br {:a=>1,:b=>2,c=>nil,:d=>3} tlp:codee"/>
			<Head name="Array Arguments"/>
			<Mark desc="Prefixing an argument with tlp:red * causes any remaining arguments to be converted to an Array: tlp:br tlp:br tlp:codes tlp:red def tlp:org gather_arguments (*arguments) tlp:br tlp:tab tlp:cyan p arguments tlp:br tlp:red end tlp:br tlp:br tlp:cyan gather_arguments 1, 2, 3 # prints # [1, # 2, # 3] tlp:codee tlp:br we can also ignore arguements using tlp:red * for example: tlp:br tlp:br tlp:codes tlp:red def tlp:org ignore_arguments (*) tlp:br tlp:red end tlp:codee"/>
			<Head name="Keyword Arguments"/>
			<Mark desc="Keyword arguments are similar to positional arguments with default values: tlp:br tlp:br tlp:codes tlp:red def tlp:org add_values (first: 1, second: 2) tlp:br tlp:tab first tlp:red + second tlp:br tlp:red end tlp:codee tlp:br Arbitrary keyword arguments will be accepted with tlp:red ** : tlp:br tlp:br tlp:codes tlp:red def tlp:org gather_arguments (first: nil, **rest) tlp:br tlp:tab tlp:cyan p first, rest tlp:br tlp:red end tlp:br gather_arguments first: 1, second: 2, third: 3 # prints # 1 # then # {:second=>2, # :third=>3} tlp:codee"/>
			<Head name="Block Arguments"/>
			<Mark desc="The block argument is indicated by tlp:red & and must come last: tlp:br tlp:br tlp:codes tlp:red def tlp:org wel tlp:br tlp:tab tlp:red if tlp:cyan block_given? tlp:br tlp:tab tlp:tab tlp:red yield tlp:br tlp:tab tlp:red else tlp:br tlp:tab tlp:tab tlp:cyan puts 'NO BLOCK GIVEN'; tlp:br tlp:tab tlp:red end tlp:br tlp:red end tlp:br tlp:br tlp:cyan wel { puts 'Block Executed' } tlp:codee tlp:br tlp:br The above function will call a block if it is given the tlp:red yield statements helps tlp:cyan call the block yield also accepts arguements and passes it to the block `{ |arguments| }` here arguments are inserted between `||` using `,` as seperator"/>
			<Mark desc="We can also convert a tlp:box proc-to-block using tlp:red & operator for example: tlp:br tlp:br tlp:codes tlp:red def tlp:org proc_to_b tlp:br tlp:tab tlp:red yield tlp:br tlp:red end tlp:br tlp:br b = tlp:cyan proc { |i| p i+1 } tlp:br tlp:br tlp:cyan proc_to_b &b tlp:br tlp:codee"/>
			<Head name="Overriding Methods"/>
			<Mark desc="If we decleare a function which already exists in the scope then the previous function is overridden by newly created function."/>
			<Head name="Proc"/>
			<Mark desc="A tlp:cyan Proc object is an encapsulation of a block of code, which can be stored in a local variable, passed to a method or another Proc, and can be called. Proc is an essential concept in Ruby and a core of its functional programming features."/>
			<Mark desc="Several Methods to create a Proc tlp:br tlp:br tlp:codes # Method # 1 tlp:br proc1 = Proc.new {|x| x**2 } tlp:br # Method # 2 tlp:br proc2 = tlp:cyan proc {|x| x**2 } tlp:codee tlp:br tlp:br proc object can be called with tlp:cyan .call method following the arguements required by proc"/>
			<Head name="Lambda Function"/>
			<Mark desc="Procs are coming in two flavors: lambda and non-lambda (regular procs). Differences are:
			tlp:br tlp:br ⚪ In lambdas, return and break means exit from this lambda; 
			tlp:br tlp:br ⚪ In non-lambda procs, return means exit from embracing method (and will throw LocalJumpError if invoked outside the method);
			tlp:br tlp:br ⚪ In non-lambda procs, break means exit from the method which the block given for. (and will throw LocalJumpError if invoked after the method returns);
			tlp:br tlp:br ⚪ In lambdas, arguments are treated in the same way as in methods: strict, with ArgumentError for mismatching argument number, and no additional argument processing;
			tlp:br tlp:br ⚪ Regular procs accept arguments more generously: missing arguments are filled with nil, single Array arguments are deconstructed if the proc has multiple arguments, and there is no error raised on extra arguments.
			"/>
			<Mark desc="Construct a proc with lambda semantics using the tlp:org Kernel#lambda method: tlp:br tlp:br tlp:codes # Method # 1 tlp:br lambda1 = tlp:cyan lambda {|x| x**2 } tlp:br # Method # 2: # using # the # lambda # literal # syntax tlp:br lambda2 = ->(x) { x**2 } tlp:codee"/>
			<br/>
			<Navigator left="/ruby/in" right="/ruby/conditional"/>
		</>
	);
}

function RubyKey(argument) {
	window.scrollTo(0,0)
	return (
		<>
			<Navigator left="/ruby/intro" right="/ruby/literal"/>
		</>
	);

}
function RubyLtrl(props){
	window.scrollTo(0,0)
	return (
		<>
			<Navigator left="/ruby/keywords" right="/ruby/methods"/>

		</>
	);
}
export {HomeRuby,RubyIntro,RubyFunc,RubyLtrl}
