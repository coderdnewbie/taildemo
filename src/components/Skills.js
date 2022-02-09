import React from 'react';
import ArrowRightSvg from "./svg/ArrowRightSvg";

function Skills() {
  return (
    <section className="">
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md px-10 py-12 bg-white rounded-lg shadow-lg">
          <h2 className="text-gray-900 text-2xl font-bold leading-snug">
            Getting Started with Tailwind CSS Fun
          </h2>
          <p className="mt-2 text-lg">
            In this tutorial, I show you how to install the Tailwind CSS fun and get started using it.
          </p>
          <a href="#" className="mt-6 inline-block text-blue-700">Read more</a>          
          
          <button className="ml-10 inline-flex items-center px-2 py-1 text-white font-semibold bg-blue-700 rounded-md shadow-sm">
            <span>View article</span>
            <ArrowRightSvg />
          </button>
        </div>
      </div>

      <div className="py-4 max-w-screen-xl mx-auto px-4">
        These are uneven cards due to the text
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full p-4 sm:w-1/2 lg:w-1/3">
          Column text
            <div className="px-10 py-12 bg-white rounded-lg shadow-lg">
            <SkillsMainText />
            </div>
          </div>

          <div className="w-full p-4 sm:w-1/2 lg:w-1/3">
            Column text 2
            <div class="px-10 py-12 bg-white rounded-lg shadow-lg">
              <SkillsMainText2 />
            </div>
          </div>

          <div className="w-full p-4 sm:w-1/2 lg:w-1/3">
            Column text 3
            <div className="px-10 py-12 bg-white rounded-lg shadow-lg">
              <SkillsMainText />
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl mx-auto px-4">
        This are uneven cards due to the text, fixed to be even
        <div className="-mx-4 flex flex-wrap">
          <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            Column text A
            <div className="flex-1 px-10 py-12 bg-white rounded-lg shadow-lg">
              <SkillsMainText />
            </div>
          </div>

          <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            Column text B
            <div className="flex-1 px-10 py-12 bg-white rounded-lg shadow-lg">
              <SkillsMainText2 />
            </div>
          </div>

          <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            Column text C
            <div className="flex-1 px-10 py-12 bg-white rounded-lg shadow-lg">
              <SkillsMainText />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4">    
        <div className="-mx-4 flex flex-wrap">    

          <div className="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            Column Text with Link
            <div className="flex flex-col flex-1 px-10 py-12 bg-white rounded-lg shadow-lg">
              <div className="flex-1">
                <h2 className="text-gray-900 text-2xl font-bold leading-snug">
                  Tailwind v3.1.0
                </h2>
                <p class="mt-2 text-lg">
                  <SkillsMainText3 />
                </p>
              </div>
              <a href="#" className="mt-6 inline-flex items-center px-6 py-3 text-white font-semibold bg-blue-700 rounded-md shadow-sm">
                View article
              </a>
            </div>
          </div>

          <div className="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            Column Text with Link 2
            <div className="flex flex-col flex-1 px-10 py-12 bg-white rounded-lg shadow-lg">
              <div className="flex-1">
                <h2 className="text-gray-900 text-2xl font-bold leading-snug">
                  Tailwind v3.1.0
                </h2>
                <p class="mt-2 text-lg">
                <SkillsMainText4 />
                </p>
              </div>
              <a href="#" className="mt-6 inline-flex items-center px-6 py-3 text-white font-semibold bg-blue-700 rounded-md shadow-sm">
                View article
              </a>
            </div>
          </div>

          <div className="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            Column Text with Link 3
            <div className="flex flex-col flex-1 px-10 py-12 bg-white rounded-lg shadow-lg">
              <div className="flex-1">
                <h2 className="text-gray-900 text-2xl font-bold leading-snug">
                  Tailwind v3.1.0
                </h2>
                <p class="mt-2 text-lg">
                  <SkillsMainText3 />
                </p>
              </div>
              <a href="#" className="mt-6 inline-flex items-center px-6 py-3 text-white font-semibold bg-blue-700 rounded-md shadow-sm">
                View article
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col flex-1 px-10 py-12 bg-white rounded-lg shadow-lg">
          <div className="flex-1">
            <h2 className="text-gray-900 text-2xl font-bold leading-snug">
              Tailwind v3.1.1
            </h2>
            <p className="mt-2 text-lg">
              <SkillsMainText5 />
            </p>
          </div>
          <a href="#" className="mt-6 inline-block px-6 py-3 text-center text-white font-semibold bg-blue-700 rounded-md shadow-sm">
            View article
          </a>          
        </div>

        <div className="flex flex-col flex-1 px-10 py-12 bg-white rounded-lg shadow-lg">
          <div className="flex-1">
            <h2 className="text-gray-900 text-2xl font-bold leading-snug">
              Tailwind v3.1.1
            </h2>
            <p className="mt-2 text-lg">
              <SkillsMainText6 />
            </p>
          </div>
          <a href="#" className="mt-6 inline-block px-6 py-3 text-center text-white font-semibold bg-blue-700 rounded-md shadow-sm">
            View article
          </a>          
        </div>

        <div className="flex flex-col flex-1 px-10 py-12 bg-white rounded-lg shadow-lg">
          <div className="flex-1">
            <h2 className="text-gray-900 text-2xl font-bold leading-snug">
              Tailwind v3.1.1
            </h2>
            <p className="mt-2 text-lg">
              <SkillsMainText5 />
            </p>
          </div>
          <a href="#" className="mt-6 inline-block px-6 py-3 text-center text-white font-semibold bg-blue-700 rounded-md shadow-sm">
            View article
          </a>          
        </div>

      </div>

    </section>
    );
}

const SkillsMainText = () => (
  "Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!"
);

const SkillsMainText2 = () => (
  "Praesentium ea et neque distinctio quas eius repudiandae quaerat!"
);

const SkillsMainText3 = () => (
  "Tailwind v3.1.0 has been released with some cool new features and a couple of bug fixes. This is the latest feature release since the v1.0 release, so let's dig into some of the updates."
);

const SkillsMainText4 = () => (
  "Tailwind v3.1.0 has been released with some cool new features and a couple of bug fixes."
);

const SkillsMainText5 = () => (
  "Tailwind v3.1.1 has been released with some cool new features and a couple of bug fixes. This is the latest feature release since the v1.0 release, so let's dig into some of the updates."
);

const SkillsMainText6 = () => (
  "Tailwind v3.1.1 has been released with some cool new features and a couple of bug fixes."
);

export default Skills;
