import React from "react";
import { FaReact, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { HiCubeTransparent } from "react-icons/hi";
import ScrollAnimation from "react-animate-on-scroll";

const Technologies = () => {
    return (
        <div id="technologies" className="flex w-screen min-h-screen justify-center items-center bg-black px-4">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl text-white font-bold m-8">Technologies Used</h2>
                <ScrollAnimation animateIn="animate__slideInLeft" animateOut="animate__slideOutLeft" delay={300}>
                    <div className="flex flex-col md:flex-row justify-around items-center md:items-start m-10 md:m-24 space-y-12 md:space-y-0">
                        {/* React Icon */}
                        <div className="flex flex-col items-center">
                            <FaReact className="my-6 text-7xl md:text-9xl text-white transition duration-500 ease-in-out hover:text-[#61DBFB] transform hover:-translate-y-1 hover:scale-110" />
                            <h3 className="mt-4 text-xl md:text-2xl text-white font-semibold">React</h3>
                            <p className="mt-2 max-w-xs text-gray-400 text-sm md:text-base">
                                We use React to provide you all visual elements you are seeing right now!
                            </p>
                        </div>

                        {/* Tailwind CSS Icon */}
                        <div className="flex flex-col items-center">
                            <RiTailwindCssFill className="my-6 text-7xl md:text-9xl text-white transition duration-500 ease-in-out hover:text-[#61DBFB] transform hover:-translate-y-1 hover:scale-110" />
                            <h3 className="mt-4 text-xl md:text-2xl text-white font-semibold">Tailwind CSS</h3>
                            <p className="mt-2 max-w-xs text-gray-400 text-sm md:text-base">
                                We empowered the web with Tailwind CSS to make it more lively!
                            </p>
                        </div>

                        {/* Python Icon */}
                        <div className="flex flex-col items-center">
                            <FaPython className="my-6 text-7xl md:text-9xl text-white transition duration-500 ease-in-out hover:text-[#FFE873] transform hover:-translate-y-1 hover:scale-110" />
                            <h3 className="mt-4 text-xl md:text-2xl text-white font-semibold">Python</h3>
                            <p className="mt-2 max-w-xs text-gray-400 text-sm md:text-base">
                                We communicate with our AI model through this powerful language.
                            </p>
                        </div>

                        {/* Tesseract Icon */}
                        <div className="flex flex-col items-center">
                            <HiCubeTransparent className="my-6 text-7xl md:text-9xl text-white transition duration-500 ease-in-out hover:text-[#3aff5b] transform hover:-translate-y-1 hover:scale-110" />
                            <h3 className="mt-4 text-xl md:text-2xl text-white font-semibold">Tesseract</h3>
                            <p className="mt-2 max-w-xs text-gray-400 text-sm md:text-base">
                                We use Tesseract to extract text from your pictures!
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Technologies;
