import React from 'react';
import Navbar from './Navbar';
import profile from '../assets/profile.png';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Projects from './Projects';

function Home() {
    return (
        <>
           
            <div className="bg-orange-200 min-h-screen flex flex-col items-center justify-center p-6">


                <main className="flex flex-col md:flex-row items-center justify-center mt-10 max-w-6xl w-full p-4 gap-6">


                    {/* Content Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl font-semibold text-pink-900 font-serif">PROFESSIONAL WEBSITE DEVELOPER</h1>
                        <p className="text-gray-700 mt-4">
                            "Hi, I'm Shikha, a passionate web developer dedicated to crafting beautiful, user-friendly websites that help businesses grow. I specialize in creating responsive, high-performing websites that leave a lasting impact. "                     </p>
                        <ul className="mt-4 text-gray-700 list-disc list-inside">
                            <li>Personal Branding & Interactive Websites</li>
                            <li>Certified Web Developer</li>
                            <li>Have 2.8+ years of experience in web development</li>

                            <li>Mobile-Friendly & Responsive Designs</li>
                            <li>Created More then 40+ Website and make  client happy</li>



                        </ul>
                        <button className='px-4  text-orange-900 cursor-pointer hover:text-pink-900 hover:text-md rounded-xl border border-orange-900 m-4'>View my work</button>
                    </div>
                    {/* Image Section */}
                    <div className="w-full h-90 md:w-1/2 flex justify-center bg-brown-900 p-4   rounded-lg ">
                        <img
                            src={profile}
                            alt="Website Builder"
                            className="rounded-lg max-w-full w-100  -mt-10 h-100"
                        />
                    </div>
                </main>
            </div>
            <About />
            <Services />
            <Projects />
            <Contact /> 
        </>
    );
}

export default Home;