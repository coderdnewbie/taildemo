import React from 'react';

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          <div className="text-center p-10">
            <button className="px-8 py-2 mx-auto text-white bg-blue-700 rounded transition duration-600 ease-in-out hover:bg-green-400 transform hover:-translate-y-1 hover:animate-bounce">
              Bounce
            </button>
          </div>
        </div>
      </div>    
    </section>
    );
}

export default about;
