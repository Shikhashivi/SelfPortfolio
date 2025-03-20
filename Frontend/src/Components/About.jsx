import React from "react";
import about from "../assets/about.png";
import { Link } from "react-router-dom";
import about2 from "../assets/about2.jpg";
import Navbar from "./Navbar";


const About = () => {
    return (
        <>

            <div className="bg-orange-200 min-h-screen flex flex-col items-center justify-center p-6">
                <header className="font-semibold text-4xl font-serif text-red-900">ABOUT ME</header>

                <main className="flex flex-col md:flex-row items-center justify-center  max-w-6xl w-full p-4 gap-6">
                    {/* Image Section with Overlapping Effect */}
                    <div className="relative w-full -ml-20 md:w-1/2 flex justify-center mt-8">
                        <img
                            src={about}
                            alt="Website Builder"
                            className="rounded-lg  top-30 left-20     shadow-lg w-60 h-50 object-cover relative z-10"
                        />
                        <img
                            src={about}
                            alt="Website Builder"
                            className="absolute  left-12 rounded-lg shadow-lg w-60 h-50 opacity-90"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 mt-30  text-center md:text-left">
                        <h1 className="text-4xl font-semibold text-pink-900 font-serif">
                            PROFESSIONAL WEBSITE DEVELOPER
                        </h1>
                        <p className="text-gray-700 mt-4">
                            Hi, I'm Shikha, a passionate web developer dedicated to crafting
                            beautiful, user-friendly websites that help businesses grow. I am Certified Web Developer ,
                            And gained Valueable experience. And also Got awarded for my work. I
                            specialize in creating responsive, high-performing websites that
                            leave a lasting impact.Let’s build something amazing together!
                        </p>
                        <div className="flex flex-wrap justify-center mx-4 mt-4 gap-4 text-gray-700">
                            <div className="w-40 border border-black px-3 py-2 rounded-md font-semibold text-center">
                                3+ Years of Experience
                            </div>
                            <div className="w-40 border border-black px-3 py-2 rounded-md font-semibold text-center">
                                40+ Projects Completed
                            </div>
                            <div className="w-40 border border-black px-3 py-2 rounded-md font-semibold text-center">
                                45+ Happy Clients
                            </div>
                        </div>


                        <button className="px-6 py-2 mt-10  ml-20  w-3/4 text-orange-900 cursor-pointer hover:text-red-600 hover:border-pink-900 rounded-xl border border-orange-900 transition">
                            <a href="/projects">  View my work</a>

                        </button>
                    </div>
                </main>
            </div>
        </>
    );
};

export default About;
