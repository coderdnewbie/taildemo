import React from 'react';
import TickySvg from "./svg/TickySvg";

function Feature() {
    return (	
        <section className="text-gray-400 bg-gray-900 ">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 ">
                    <div className="flex space-x-2 sm:space-x-4">
                        <TickySvg />
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug"><FeatureHeading /></p>
                            <p className="leading-snug"><FeatureMainText /></p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <TickySvg />
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug"><FeatureHeading /></p>
                            <p className="leading-snug"><FeatureMainText /></p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <TickySvg />
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug"><FeatureHeading /></p>
                            <p className="leading-snug"><FeatureMainText /></p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-3/5 dark:bg-coolGray-800">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <img src="https://picsum.photos/640/480?random=5" alt="" className="rounded-lg shadow-lg dark:bg-coolGray-500 aspect-video sm:min-h-96" />
                    </div>
                </div>
            </div>
        </section>
    );
}

const FeatureHeading = () => (
    "Lorem ipsum dolor sit amet"
  );

const FeatureMainText = () => (
    "Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!"
  );

export default Feature;
