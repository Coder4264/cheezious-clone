import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faSearch, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import SearchPopup from './SearchPopup'; // Import the SearchPopup component

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to control cart menu visibility
  const [searchPopupOpen, setSearchPopupOpen] = useState(false); // State to control search popup visibility

  const menuRef = useRef(null);
  const popupRef = useRef(null);

  const handleSearchClick = () => {
    setSearchPopupOpen(true);
  };

  const handleClosePopup = () => {
    setSearchPopupOpen(false); 
  };

  const handleCartClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the cart menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='sticky top-0 w-full bg-yellow-400 px-5 z-10'>
      <div className='w-11/12 m-auto px-2 flex justify-between items-center'>
        {/* Location Icon */}
        <div className='w-4/12 flex items-center gap-2'>
          <FontAwesomeIcon icon={faLocationDot} size='2x' color='red' />
          <div>
            <h3 className='font-semibold text-sm'>Deliver to</h3>
            <p className='text-xs font-semibold'>A Block, Rawalpindi</p>
          </div>
        </div>

        {/* Logo */}
        <div className='w-4/12 flex justify-center'>
          <img className='w-20' src="https://em-cdn.eatmubarak.pk/54946/logo/1649325481.png" alt="Logo" />
        </div>

        {/* Icons Section */}
        <div className='flex items-center justify-end gap-4 w-4/12'>
          {/* Search Icon */}
          <div>
            <FontAwesomeIcon icon={faSearch} size='2x' color='red' onClick={handleSearchClick} />
          </div>

          {/* User Icon */}
          <div>
            <FontAwesomeIcon icon={faUser} size='2x' color='red' />
          </div>

          {/* Cart Icon with Menu */}
          <div className='relative'>
            <FontAwesomeIcon icon={faCartShopping} size='2x' color='red' onClick={handleCartClick} className='cursor-pointer' />
            <div className='absolute -top-3 -right-4 w-6 h-6 rounded-full bg-white'>
              <span className='flex justify-center items-center'>0</span>
            </div>
            {/* Cart Menu */}
            {menuOpen && (
              <div
                ref={menuRef} // Reference to the cart menu div
                className='menu absolute -right-20 z-10 w-[30vw] h-[90vh] bg-white border-2 border-black'
              >
                {/* Menu content */}
              </div>
            )}
          </div>
        </div>

        {/* Search Popup */}
        {searchPopupOpen && (
          <SearchPopup onClose={handleClosePopup} ref={popupRef} /> // Pass onClose function to SearchPopup
        )}
      </div>
    </div>
  );
}
