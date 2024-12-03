"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Nav = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-navbarBgColor bg-opacity-75 p-2 ${
        isSticky ? "sticky top-0 z-50" : ""
      }`}
    >
      {/* Your navigation content */}
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo Image */}
        <div className="flex items-center">
          <img
            src="/images/vpp flag.webp" // Path to your logo image
            alt="Logo"
            className="h-8 md:h-10 lg:h-12 mr-3" // Adjust size as necessary
          />
          <Link href="/" className="text-white tracking-widest font-Open sans text-xl base:text-base md:text-base lg:text-3xl">
            VOICE OF THE PEOPLE PARTY
          </Link>
        </div>

        {/* Responsive Navigation Menu */}
        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`hidden gap-12  md:flex space-x-4 ${
            isMobileMenuOpen ? "md:hidden" : ""
          }`}
        >
          <div
            className={`hidden justify-between	 md:flex space-x-4 ${
              isMobileMenuOpen ? "md:hidden" : ""
            }`}
          >
            <Link
              href="/"
              className="text-white font-grotesque text-lg tracking-widest"
            >
              Home
            </Link>
          
            <Link
              href="/about"
              className="text-white font-grotesque text-lg tracking-widest"
            >
              About
            </Link>
            <Link
              href="/connect"
              className="text-white font-grotesque text-lg tracking-widest"
            >
              Connect
            </Link>
            <Link
              href="/events"
              className="text-white font-grotesque text-lg tracking-widest"
            >
              Events
            </Link>
            <Link
              href="/give"
              className="text-white font-grotesque text-lg tracking-widest"
            >
              Give
            </Link>
            
            <Link
              href="/contact"
              className="text-white font-grotesque text-lg tracking-widest"
            >
              Contact
            </Link>

  <div className="relative inline-block text-left">
              {/* The main link that toggles the dropdown */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-white font-grotesque text-lg tracking-widest flex items-center"
              >
                Discussion and Interaction
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-5 h-5 ml-2 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      href="/prophecy-videos"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Tour Videos
                    </Link>
                    <Link
                      href="/bible-sermons"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Public Outreach
                    </Link>
                  </div>
                </div>
              )}
            </div>          
          </div>

          <Link
              href="/about"
              className="text-white font-grotesque text-lg tracking-widest"
            >
              Live
            </Link>


          {/* <Link
              href="/roles"
              className="text-white font-grotesque text-lg tracking-widest"       >
              Roles
            </Link> */}

          <Link
            href="/login"
            className="text-white font-grotesque text-lg tracking-widest border border-solid w-24 h-9 text-center"
          >
            LOGIN
          </Link>
        </div>

      </nav>
      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-full bg-navbarBgColor bg-opacity-75 z-50">
          <div className="container mx-auto flex p-4">
            {/* Close Button */}
            <button
              className="text-white focus:outline-none absolute top-4 right-4"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Mobile Menu Links */}
            <div className="flex flex-col space-y-4 mt-8 content-center mx-auto">
          
            <Link
              href="/"
              className="text-white self-center"
            >
              Home
            </Link>

              <Link
                href="/about"
                className="text-white self-center"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link
                href="/connect"
                className="text-white self-center"
                onClick={toggleMobileMenu}
              >
                Connect
              </Link>
              <Link
                href="/events"
                className="text-white self-center"
                onClick={toggleMobileMenu}
              >
                Events
              </Link>
              <Link
                href="/give"
                className="text-white self-center"
                onClick={toggleMobileMenu}
              >
                Give
              </Link>
              <Link
                href="/contact"
                className="text-white self-center"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>

              <div className="relative inline-block mx-auto">
                {/* The main link that toggles the dropdown */}
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-white font-grotesque text-lg tracking-widest flex items-center"
                >
                   Discussion and Interaction
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {dropdownOpen && (
                  <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        href="/prophecy-videos"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                       Tour Videos
                      </Link>
                      <Link
                        href="/bible-sermons"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      > Public Outreach
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link
                href="/about"
                className="text-white self-center"
                onClick={toggleMobileMenu}
              >
                Live
              </Link>          
              
              
              <Link
                href="/login"
                className="text-white self-center text-center border border-solid p-2"
                style={{ width: "90vw" }}
                onClick={toggleMobileMenu}
              >
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
