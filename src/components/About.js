import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import Spinner1Svg from "./svg/Spinner1Svg";

function about() {
  return (
    <section id="about"> 
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-bl from-purple-300 to-blue-900">          
              Hi, This is a  
            </div>            
            <div className="text-4xl text-yellow-400 mt-4 text-center">
               Demo Site
            </div>
          </h1>
          <p className="mt-12 mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dia.
          </p>
          <div className="flex justify-center">
            <a
            href="#contact"
            className="inline-flex text-white hover:bg-gradient-to-r hover:from-fuchsia-300 hover:to-purple-500
                        border-0 py-2 px-6 focus:outline-none bg-gradient-to-r from-red-300 to-pink-500 rounded text-lg">
              Contact
            </a>
            <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">          
          <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-fuchsia-600 mb-3">Introducing...</h2>
          <p className="text-3xl lg:text-4xl leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-slate-300 to-green-500 tracking-tight mb-8">Tailwind and React</p>
          <div className="text-red-500 -mt-4"><FaRegThumbsUp /></div>
          <div class="relative ml-10 w-12 h-12 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gray-600 rounded-full border-1 border-white"></div>
          </div>
          <div className="mt-3"><Spinner1Svg /></div>
          <div className="mt-4">
            <div  className="relative bg-white w-auto p-4 border border-indigo-500 rounded-lg">
              <div className="text-gray-800 text-sm"> 
                <p className="mb-6">Speech caption bubbles can be made ...</p>              
              </div>
              <div className="absolute -mb-4 left-[39px] bottom-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-white border-r border-b border-indigo-50">
              </div>
            </div>
          </div>
        </div>        
      </div>    
    </section>
    );
}

export default about;
