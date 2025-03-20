import React from "react";
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
    {
        title: "E-Commerce Platform",
        image: p1,
        description: "An online shopping platform with cart and payment integration.",
        link: "https://your-ecommerce-site.com",
    },
    {
        title: "Table Booking System",
        image: p3,
        description: "A reservation system for restaurants and private events.",
        link: "https://flourishing-tarsier-87bdf4.netlify.app/",
    },
    {
        title: "Courses Website",
        image: p2,
        description: "A personal website showcasing skills and projects.",
    },
    {
        title: "MakeOver Website",
        image: p4,
        description: "A blog platform with user authentication and comments.",
        link: "https://incandescent-rugelach-b238a5.netlify.app/#",
    },
   
    
    {
        title: "Fitness Tracker",
        image: p5,
        description: "An app to track workouts and monitor progress.",
    },
];

const MyProjects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section id="projects" className="py-6 px-6   h-200 bg-orange-200 text-white">
            <h2 className="text-3xl font-bold text-center mt-20 text-pink-800  mb-8">My Projects</h2>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className="px-4 mt-10 ">
                        <div className="bg-orange-900 cursor-pointer  p-6 rounded-lg shadow-lg">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-lg w-full h-58 mb-4 transition-transform transform hover:scale-105"
                                />
                            </a>
                            <h3 className="text-xl text-orange-300 font-2xl font-bold">{project.title}</h3>
                            <p className="text-gray-900 mt-2">{project.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default MyProjects;