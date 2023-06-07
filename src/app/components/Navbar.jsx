'use client';

import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  useClickAway(menuRef, () => {
    if (menuOpen) setMenuOpen(false);
  });

  useClickAway(dropdownRef, () => {
    if (dropdownOpen) setDropdownOpen(false);
  });

  return (
    <nav className='fixed w-full text-black'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        {/* Logo + Name */}
        <div>
          <a
            href='#'
            className='flex items-center'
          >
            <img
              src='/images/Web_logo_Base.png'
              className='h-20 mr-3'
              alt='SphereBridge Services Company Logo'
            />
            <span className='opacity-0 md:opacity-100 self-center text-2xl font-semibold whitespace-nowrap '>
              SphereBridge
            </span>
          </a>
        </div>

        {/* Button for dropdown nav menu */}
        <div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 '
            aria-controls='navbar-dropdown'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>

        {/* Drop down nav menu */}
        <div
          ref={menuRef}
          className={
            menuOpen
              ? 'w-full md:block md:w-auto bg-white md:bg-transparent'
              : 'hidden md:block md:w-auto'
          }
          id='navbar-dropdown'
        >
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0 '>
            <li className='border-b-2 border-gray-100'>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 duration-300 ease-in-out hover:text-blue-600 md:hover:scale-110'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li className='border-b-2 border-gray-100'>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className='flex items-center justify-between w-full py-2 pl-3 pr-4 rounded  md:border-0  md:p-0 md:w-auto duration-300 ease-in-out hover:text-blue-600 md:hover:scale-110'
              >
                Services
                <svg
                  className='w-5 h-5 ml-1'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
              <div
                ref={dropdownRef}
                onMouseLeave={() => setDropdownOpen(false)}
                className={
                  dropdownOpen
                    ? 'absolute z-10 font-normal bg-white rounded-lg shadow w-44 mt-2 transition duration-500 ease-in-out'
                    : 'hidden'
                }
              >
                <ul
                  className='py-2 text-md'
                  aria-labelledby='dropdownLargeButton'
                >
                  <li className='border-b-2 border-gray-100'>
                    <a
                      href='#'
                      className='block px-4 py-2 duration-300 ease-in-out hover:text-blue-600 md:hover:scale-105'
                    >
                      Web and Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block px-4 py-2 duration-300 ease-in-out hover:text-blue-600 md:hover:scale-105'
                    >
                      Data Analytics and Visualization
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className='border-b-2 border-gray-100'>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 duration-300 ease-in-out hover:text-blue-600 md:hover:scale-110'
              >
                Blog
              </a>
            </li>
            <li className='border-b-2 border-gray-100'>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 duration-300 ease-in-out hover:text-blue-600 md:hover:scale-110'
              >
                About
              </a>
            </li>
            <li className='md:border-b-2 border-gray-100'>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 duration-300 ease-in-out hover:text-blue-600 md:hover:scale-110'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
