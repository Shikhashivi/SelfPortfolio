import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

 function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-900 text-white p-4">
      <div className="container  flex justify-between  items-center">
        <h1 className="text-xl font-bold">Shku Dev</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/service" className="hover:text-yellow-400">Service</Link></li>

          <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-gray-800 p-4 space-y-4">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
export default Navbar;