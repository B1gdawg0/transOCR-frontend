import React from "react";
import ScrollReveal from "./scroll_reveal";
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';


const AboutSection = () => {
    return (
        <div id="about" className="flex w-screen h-screen justify-center items-center text-white">
            <div className="max-w-6xl mx-auto text-center">
                <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" animatePreScroll delay={200}>
                    <h2 className="text-4xl font-bold">About TransOCR</h2>
                </ScrollAnimation>


                <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" animatePreScroll delay={200}>
                    <p className="mt-10 text-xl">
                        TransOCR is an advanced tool that allows you to seamlessly extract text from images and translate it into multiple languages.
                        Our solution is designed to be intuitive, efficient, and reliable for users across various industries.
                    </p>
                </ScrollAnimation>


         


            </div>
        </div>
    );
};

export default AboutSection;
