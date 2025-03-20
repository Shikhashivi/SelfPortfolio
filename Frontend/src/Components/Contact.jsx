import React, { useState } from "react";
import Con from "../assets/conn.jpg";

const Contact = () => {
    // State variables for form inputs
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false); // Loading state for button
    const [success, setSuccess] = useState(""); // Success message
    const [error, setError] = useState(""); // Error message

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (data.success) {
                setSuccess("Message sent successfully!");
                setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
            } else {
                setError("Failed to send message. Please try again.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-orange-200 min-h-screen flex flex-col items-center justify-center p-6">
            {/* Page Header */}
            <h2 className="text-4xl font-serif font-semibold text-red-900 mb-8">CONTACT ME</h2>

            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl bg-orange-300 p-6 rounded-lg shadow-lg">
                {/* Left Image Section */}
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    <img src={Con} alt="Contact" className="w-full rounded-lg shadow-md" />
                </div>

                {/* Right Form Section */}
                <div className="w-full lg:w-1/2 px-6">
                    <h3 className="text-3xl font-bold text-red-900 mb-4">Get in Touch</h3>

                    {/* Success/Error Message */}
                    {success && <p className="text-green-600 font-semibold mb-2">{success}</p>}
                    {error && <p className="text-red-600 font-semibold mb-2">{error}</p>}

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-1/2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-1/2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full p-3 bg-black text-white font-bold rounded-md hover:bg-gray-800"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
