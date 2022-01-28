import React from 'react';
import SunSvg from "./svg/SunSvg";
import RainSvg from "./svg/RainSvg";
import CloudSvg from "./svg/CloudSvg";
import CloudWithSunSvg from "./svg/CloudWithSunSvg";
import SnowSvg from "./svg/SnowSvg";


function Weather() {
    return (
        <>
            <div className="max-w-md p-8 mx-auto rounded-lg dark:bg-coolGray-900 dark:text-coolGray-100">
                <div className="flex justify-between space-x-8">
                    <div className="flex flex-col items-center">
                    <   SunSvg />
                        <h1 className="text-xl font-semibold">Ambleside</h1>
                    </div>
                    <span className="font-bold text-8xl">14°</span>
                </div>
                <div className="flex justify-between mt-8 space-x-4 dark:text-coolGray-400">
                    <div className="flex flex-col items-center space-y-1">
                        <span className="uppercase">wed</span>
                        <RainSvg />
                        <span>11°</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                        <span className="uppercase">thu</span>
                        <CloudSvg />
                        <span>17°</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                        <span className="uppercase">fri</span>
                        <CloudWithSunSvg />
                        <span>8°</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                        <span className="uppercase">sat</span>
                        <SnowSvg />
                        <span>-2°</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                        <span className="uppercase">sun</span>
                        <CloudSvg />
                        <span>4°</span>
                    </div>
                </div>
            </div>
        </>
        );
}

export default Weather;
