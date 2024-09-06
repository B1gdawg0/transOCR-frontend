import React from "react";
import { SquareArrowOutUpRight } from 'lucide-react';
import AboutSection from './components/about_project';
import HowItWorks from './components/how_it_work';
import Technologies from './components/tech_stack';
import ScrollReveal from './components/scroll_reveal';
import ScrollAnimation from "react-animate-on-scroll";
import { useNavigate } from "react-router-dom";

import 'animate.css';

const InfoPage = () => {

    const navigate = useNavigate();





    return (
        <div className="font-poppins max-w-screen overflow-hidden">
            {/* Welcome Section */}
            <ScrollReveal delay={0.7}>
                <div className="flex w-screen h-screen justify-center items-center  text-black 
                
                
                " id="first-section">
                    <ScrollReveal className="flex flex-col items-center text-center object-fill" delay={0.4}>
                        <div className="text-4xl m-5 font-medium">
                            Welcome! We are
                        </div>
                        <div className="text-6xl leading-none font-bold m-10">
                            TransOCR
                        </div>
                        <p className="mt-6 text-xl">
                            TICTA ICT THAILAND 2024: Top 10 Finalists for National Presentation Round
                        </p>
                        <div className="">
                            <button className=" p-4 rounded-lg w-52 border-2 border-black mt-10  transition duration-500 ease-in-out hover:text-white transform  hover:scale-110 hover:bg-black text-lg"
                                onClick={() => {
                                    navigate('/login')
                                }}

                            >Get Started!</button>
                        </div>
                    </ScrollReveal>

                </div>

            </ScrollReveal>

            {/* About Section */}
            <div className=" bg-black" >
                <AboutSection />
            </div>

            {/* How It Works Section */}
            <div className="">
                <ScrollReveal delay={0.4}>
                    <HowItWorks />
                </ScrollReveal>
            </div>

            {/* Technologies Used Section */}
            <div className=" bg-black">
                <ScrollReveal delay={0.4}>
                    <Technologies />
                </ScrollReveal>
            </div>

            <ScrollReveal delay={0.4}>
                <div className="min-h-screen flex flex-col items-center justify-center" id="member-section">
                    {/* Section Title */}
                    <div className="my-10 text-3xl md:text-4xl font-bold text-center">
                        Members
                    </div>

                    <ScrollAnimation animateIn="animate__slideInRight" animateOut="animate_slideOutLeft" duration={1.5}>
                        {/* Member Cards */}
                        <div className="flex flex-wrap justify-center gap-10 px-4 md:px-10 lg:px-20">
                            {[
                                { name: "Suphanat S.", github: "https://github.com/OhmSuphanat", image: "https://img5.pic.in.th/file/secure-sv1/IMG_0353d2aa9a577f99e730.jpg" },
                                { name: "Lerdphipat K.", github: "https://github.com/B1gdawg0", image: "https://img2.pic.in.th/pic/IMG_8998fe2c274e7dd215ef.jpg" },
                                { name: "Kawin S.", github: "https://github.com/UADG", image: "https://img5.pic.in.th/file/secure-sv1/Unnamed-phone-wallpaper.png" },
                                { name: "Pinpawat L.", github: "https://github.com/ppwlsw", image: "https://img2.pic.in.th/pic/IMG_03857b9219a214c45e3d.jpg" }
                            ].map((member, index) => (
                                <div key={index} className="flex flex-col items-center max-w-[300px] w-full sm:w-[48%] lg:w-[22%] rounded-2xl bg-gray-800 shadow-lg border-2 border-black">
                                    <div className="w-full h-full overflow-hidden rounded-t-2xl">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex w-full my-3 px-4 justify-between items-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                        <a href={member.github} className="font-semibold text-base md:text-lg hover:underline">
                                            {member.name}
                                        </a>
                                        <SquareArrowOutUpRight className="text-white" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>
            </ScrollReveal>

        </div>
    );
};

export default InfoPage;
