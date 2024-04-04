import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HamburgerIcon } from '../assets/hamburgerIcon.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const displayClass = isMenuOpen ? "block" : "hidden md:block";

  // Function to close the dropdown menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative p-4 flex flex-wrap justify-between items-center">
      {/* Hamburger Icon: Visible on small screens */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-300">
          <HamburgerIcon className="w-10 h-10" />
        </button>
      </div>
      <ul className={`absolute w-full mt-2 bg-gray-700 md:bg-transparent md:static md:flex md:flex-row md:items-center ${displayClass}`}
      style={{top: '60px', zIndex: 20, width: 'max-content', backgroundColor: isMenuOpen ? 'rgba(194, 179, 152, 0.8)' : 'transparent'}}>
        <li className="mr-6">
          <Link to="/" className="hover:text-gray-300 block md:inline-block m-4 md:mt-0"onClick={closeMenu}>Home</Link>
        </li>
        <li className="mr-6">
          <Link to="/our-dogs" className="hover:text-gray-300 block md:inline-block m-4 md:mt-0"onClick={closeMenu}>Our Dogs</Link>
        </li>
        <li className="mr-6">
          <Link to="/puppies" className="hover:text-gray-300 block md:inline-block m-4 md:mt-0"onClick={closeMenu}>Puppies</Link>
        </li>
        <li className="mr-6">
          <Link to="/results" className="hover:text-gray-300 block md:inline-block m-4 md:mt-0"onClick={closeMenu}>Results</Link>
        </li>
        <li className="mr-6">
          <Link to="/latest-posts" className="hover:text-gray-300 block md:inline-block m-4 md:mt-0"onClick={closeMenu}>Latest Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
