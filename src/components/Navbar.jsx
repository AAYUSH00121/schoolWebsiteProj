import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="https://img.freepik.com/free-vector/hand-drawn-high-school-logo-design_23-2149613316.jpg?w=740&t=st=1722025398~exp=1722025998~hmac=0563614100eaedd7a0144da3154370bbeef7cc0e4e46e75458962a34d87f275a" alt="Springdale Public School" className="h-10 mr-4" />
          <h1 className="text-2xl font-bold">Springdale Public School</h1>
        </div>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/" 
              className="hover:text-gray-200 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="hover:text-gray-200 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/academics" 
              className="hover:text-gray-200 transition duration-300"
            >
              Academics
            </Link>
          </li>
          <li>
            <Link 
              to="/admissions" 
              className="hover:text-gray-200 transition duration-300"
            >
              Admissions
            </Link>
          </li>
          <li>
            <Link 
              to="/faculty" 
              className="hover:text-gray-200 transition duration-300"
            >
              Faculty
            </Link>
          </li>
          <li>
            <Link 
              to="/students" 
              className="hover:text-gray-200 transition duration-300"
            >
              Students
            </Link>
          </li>
          <li>
            <Link 
              to="/gallery" 
              className="hover:text-gray-200 transition duration-300"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="hover:text-gray-200 transition duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
