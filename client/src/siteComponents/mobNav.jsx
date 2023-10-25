// src/components/MobileNav.js
import React, { useState } from 'react';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-900 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">Your Logo</h1>
        <button
          className="text-white text-xl md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <div className={`mt-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
        {/* Add your navigation links here */}
        <ul className="text-white">
          <li className="py-2">Home</li>
          <li className="py-2">About</li>
          <li className="py-2">Services</li>
          <li className="py-2">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
