'use client';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const handleItemClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 text-white overflow-y-auto">
        <ul className="py-4">
          <li className="px-4 py-2 pt-16 hover:bg-gray-700" onClick={handleItemClick}>
            Item 1
            {isOpen && (
              <ul className="ml-4 subitems">
                <li className="px-4 py-2 hover:bg-gray-700">Subitem 1</li>
                <li className="px-4 py-2 hover:bg-gray-700">Subitem 2</li>
                <li className="px-4 py-2 hover:bg-gray-700">Subitem 3</li>
              </ul>
            )}
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">Item 2</li>
          <li className="px-4 py-2 hover:bg-gray-700">Item 3</li>
        </ul>
      </div>

      {/* Main content */}
      <div className="w-4/5 bg-white overflow-y-auto">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 bg-gray-200 shadow z-10">
  <div className="flex items-center justify-between px-4 py-2">
    <h1 className="text-lg font-bold text-gray-800">SOA UNIVERSITY</h1>
    <div className="flex items-center">
      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
        </li>
      </ul>
      <div className="md:hidden">
        <button
          onClick={handleMobileMenuClick}
          className="text-gray-800 hover:text-gray-600 focus:outline-none"
        >
          <FaBars />
        </button>
        {isMobileMenuOpen && (
          <ul className="absolute right-0 mt-2 py-2 bg-white border rounded shadow-lg">
            <li className="px-4 py-2">
              <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
            </li>
            <li className="px-4 py-2">
              <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
            </li>
            <li className="px-4 py-2">
              <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  </div>
</nav>


        {/* Main content */}
        <div className="p-4 pt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Dashboard</h2>
          <p className="text-gray-600">This is the main content of your dashboard.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
