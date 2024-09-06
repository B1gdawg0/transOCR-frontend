import React from "react";
import { FaFileUpload } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";
import { HiMiniSparkles } from "react-icons/hi2";
import ScrollReveal from "./scroll_reveal";



const HowItWorks = () => {
    return (
        <div id="how-it-works" className="flex w-screen h-screen justify-center items-center">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-24 text-gray-800">How It Works</h2>
                <div className="flex flex-col md:flex-row justify-around items-center md:items-start m-10 md:m-24 space-y-12 md:space-y-0">
                    <div className="flex flex-col items-center">
                        <FaFileUpload className="text-9xl ease-in-out transition duration-500  hover:text-[#f54545] transform hover:-translate-y-1 hover:scale-110" />
                        <h3 className="mt-4 text-2xl font-semibold"> Upload </h3>
                        <p className="mt-2 max-w-xs text-gray-600">
                            Upload or take a photo of the text you want to extract.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <GiProcessor className="text-9xl ease-in-out transition duration-500  hover:text-[#459af5] transform hover:-translate-y-1 hover:scale-110" />

                        <h3 className="mt-4 text-2xl font-semibold"> Processing </h3>
                        <p className="mt-2 max-w-xs text-gray-600">
                            Our powerful OCR engine extracts the text with high accuracy.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <HiMiniSparkles id="sparkle" className="text-9xl ease-in-out transition duration-500  hover:text-[#f5d665] transform hover:-translate-y-1 hover:scale-110 " />
                        <h3 className="mt-4 text-2xl font-semibold"> Result </h3>
                        <p className="mt-2 max-w-xs text-gray-600">
                            Instantly translate the extracted text into your preferred language.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
