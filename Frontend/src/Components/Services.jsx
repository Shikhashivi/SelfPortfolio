import React from "react";
import Image from "../assets/service.png";

const Services = () => {
    return (
        <section className="py-12 px-4 bg-orange-200">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-pink-800">MY SERVICES</h2>
            </div>

            {/* Image and Services Grid */}
            <div className="max-w-6xl mx-auto mt-12 ">
                <div className="relative w-full h-64 md:h-80 bg-gray-300 rounded-lg overflow-hidden">
                    <img
                        src={Image}
                        alt="Service Banner"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Services Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 ">
                    {/* Service 1 */}
                    <div className="p-6 bg-orange-900 shadow-lg rounded-lg text-center">
                        <div className="text-4xl mb-4"></div>
                        <h3 className="text-4xl font-serif text-orange-300">Basic Website</h3>
                        <h4 className="text-2xl font-serif text-orange-300 mt-5">Rs 5000 to 8000</h4>
                        <p className="text-orange-200 mt-2">
                            <ul className="text-left text-orange-200 w-80 list-disc list-inside mt-5 ">
                                <li>3-5 Pages(Home,Menu,About,Contact)</li>
                                <li>Mobile-friendly design</li>
                                <li>Google Maps & Social media links</li>
                                <li>Contact Form for user interaction</li>

                            </ul>
                        </p>
                        <button className="mt-45 text-orange-400 border px-2 cursor-pointer font-semibold hover:text-orange-200">
                            Let's Talk
                        </button>
                    </div>
                    {/* Service 2 */}
                    <div className="p-6 bg-orange-900 shadow-lg rounded-lg text-center">
                        <div className="text-4xl mb-4"></div>
                        <h3 className="text-4xl font-serif text-orange-300">Standard website</h3>
                        <h4 className="text-2xl font-serif mt-5 text-orange-300">Rs 9000 to 12000</h4>
                        <p className="text-orange-200 mt-2">
                            <ul className="text-left text-orange-200 w-80 list-disc list-inside mt-5 px-4 ">
                                <li>Everything in Basic, plus:</li>
                                <li>Mobile-friendly design</li>
                                <li>Google Maps & Social media links</li>

                                <li>Online Reservation System</li>
                                <li>Interactive menu with Images</li>
                                <li>Blog or Event Updates</li>
                                <li>Up to 10 Pages</li>

                            </ul>
                        </p>
                        <button className="mt-27 text-orange-400 border px-2 cursor-pointer font-semibold hover:text-orange-200">
                            Let's Talk
                        </button>
                    </div>

                    {/* Service 3 */}
                    <div className="p-6 bg-orange-900 shadow-lg rounded-lg text-center">
                        <div className="text-4xl mb-4"></div>
                        <h3 className="text-4xl font-serif text-orange-300">Premium website</h3>
                        <h4 className="text-2xl font-serif text-orange-300 mt-5">Rs 15000 to 20000</h4>
                        <p className="text-gray-600 mt-2">
                            <ul className="text-left text-orange-200 w-80 list-disc list-inside mt-5 px-4 ">
                                <li>Everything in Standard, plus:</li>
                                <li>Online Ordering System with payment Details</li>
                                <li>Custom-Designed & Branded UI/UX for a unique look</li>
                                <li>Speed Optimization for faster loading</li>
                                <li>Custom DashBoard for order & Customer Management</li>

                            </ul>
                        </p>
                        <button className="mt-4 text-orange-400 border px-2 mt-16 cursor-pointer font-semibold hover:text-orange-200">
                            Let's Talk
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;