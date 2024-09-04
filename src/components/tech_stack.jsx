import React from "react";
import { FaReact, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { HiCubeTransparent } from "react-icons/hi";



const Technologies = () => {
    return (
        <div id="technologies" className="py-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl text-black font-bold ">Technologies Used</h2>
                <div className="flex justify-around mt-12">
                    <div className="flex flex-col items-center">
                        <FaReact className="text-9xl text-black" />
                        <h3 className="mt-4 text-2xl text-black font-semibold">React</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <RiTailwindCssFill className="text-9xl text-black" />

                        <h3 className="mt-4 text-2xl text-black font-semibold">Tailwind CSS</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaPython className="text-9xl text-black" />
                        <h3 className="mt-4 text-2xl text-black font-semibold">Python</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <HiCubeTransparent className="text-9xl text-black" />
                        <h3 className="mt-4 text-2xl text-black font-semibold">Tesseract</h3>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Technologies;
