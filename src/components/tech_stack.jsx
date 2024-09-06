import React from "react";
import { FaReact, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { HiCubeTransparent } from "react-icons/hi";
import ScrollAnimation from "react-animate-on-scroll";


const Technologies = () => {




    return (
        <div id="technologies" className="flex w-screen h-screen justify-center items-center bg-black">
            <div className="text-center">
                <h2 className="text-4xl text-white font-bold ">Technologies Used</h2>
                <ScrollAnimation animateIn="animate__slideInLeft" animateOut="animate__slideOutLeft" delay={300}>
                    <div className="w-screen flex justify-around m-24">
                        <div className="flex flex-col items-center">
                            <FaReact className="my-10 text-9xl text-white transition duration-500 ease-in-out hover:text-[#61DBFB] transform hover:-translate-y-1 hover:scale-110" />
                            <h3 className="mt-4 text-2xl text-white font-semibold">React</h3>
                            <p className="mt-2 max-w-xs text-gray-400">
                                We use react to provide you all visual thing that you are seeing right now !
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <RiTailwindCssFill className="my-10 text-9xl text-white transition duration-500 ease-in-out hover:text-[#61DBFB] transform hover:-translate-y-1 hover:scale-110" />
                            <h3 className="mt-4 text-2xl text-white font-semibold">Tailwind CSS</h3>
                            <p className="mt-2 max-w-xs text-gray-400">
                                We empowered the web with tailwind css to make
                                more Lively
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaPython className="my-10 text-9xl text-white transition duration-500 ease-in-out hover:text-[#FFE873] transform hover:-translate-y-1 hover:scale-110" />
                            <h3 className="mt-4 text-2xl text-white font-semibold ">Python</h3>
                            <p className="mt-2 max-w-xs text-gray-400">
                                We communicate our Artificial Intelligent model through this language
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <HiCubeTransparent className="my-10 text-9xl text-white transition duration-500 ease-in-out hover:text-[#3aff5b] transform hover:-translate-y-1 hover:scale-110" />
                            <h3 className="mt-4 text-2xl text-white font-semibold">Tesseract</h3>
                            <p className="mt-2 max-w-xs text-gray-400">
                                We use this Tesseract to extract text from your picture !
                            </p>
                        </div>

                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Technologies;
