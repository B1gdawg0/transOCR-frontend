import React from "react";
import { SquareArrowOutUpRight } from 'lucide-react';
import AboutSection from './components/about_project';
import HowItWorks from './components/how_it_work';
import Technologies from './components/tech_stack';

const InfoPage = () => {
    return (
        <div className="font-poppins text-white min-h-screen">
            {/* Hero Section */}
            <div className="flex align-middle mt-10 p-10 h-64">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/KU_SubLogo.png" alt="KU_logo" className="w-36 h-36 bg-white" />

            </div>
            <div className="mt-20 mx-7">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="text-4xl font-medium text-[#016b67]">
                        Welcome! We are
                    </div>
                    <div className="text-6xl leading-none font-bold mt-4">
                        TransOCR
                    </div>
                    <p className="mt-6 max-w-3xl text-xl text-gray-300">
                        Enim eu officia deserunt duis minim laborum laborum sunt incididunt aliqua mollit officia enim esse.
                        Incididunt cillum ea quis ipsum ea. Adipisicing incididunt tempor deserunt consequat.
                    </p>
                </div>
            </div>

            {/* About Section */}
            <AboutSection />

            {/* How It Works Section */}
            <HowItWorks />

            {/* Technologies Used Section */}
            <Technologies />

            {/* Project Section */}
            <div className="my-10 text-2xl font-bold text-center text-white">
                ~/src/members
            </div>

            <div className="flex flex-wrap justify-center gap-10">
                {[
                    { name: "Suphant S.", github: "https://github.com/OhmSuphanat", image: "src/assets/picture1.png" },
                    { name: "Lerdphipat K.", github: "https://github.com/ppwlsw", image: "src/assets/picture1.png" },
                    { name: "Kawin S.", github: "https://github.com/UADG", image: "src/assets/picture1.png" },
                    { name: "Pinpawat L.", github: "https://github.com/ppwlsw", image: "src/assets/picture1.png" }
                ].map((member, index) => (
                    <div key={index} className="flex flex-col items-center max-w-[300px] rounded-2xl bg-gray-800 shadow-lg border-2 border-[#016b67]">
                        <div className="w-full max-h-[400px] overflow-hidden rounded-t-2xl">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex w-full my-3 px-4 justify-between items-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            <a href={member.github} className="font-semibold text-lg hover:underline">
                                {member.name}
                            </a>
                            <SquareArrowOutUpRight className="text-[#016b67]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoPage;
