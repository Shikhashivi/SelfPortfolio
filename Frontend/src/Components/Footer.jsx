import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white py-6 px-4">
      <div className="container mx-auto text-center">
        {/* Name & Contact Details */}
        <h2 className="text-3xl font-serif">Skhu Dev</h2>
        <p className="mt-1">📩 shikhashivi1111@gmail.com | 📞 +91 7983574074</p>

        {/* Social Media Links */}
        <div className="flex justify-center mt-3 space-x-4">
          <a href="https://github.com/Shikhashivi" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-gray-400" />
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <p className="mt-4 text-sm text-gray-400">
          © 2025 Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
