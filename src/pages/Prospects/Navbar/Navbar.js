import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../../Images/Footer/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className=" px-2 sm:px-4 py-6 ">
        <div className="container flex flex-wrap items-center mx-auto justify-around">
          <Link to="/home" className="flex items-center">
            {/* <img src={logo} className="mr-2 h-6 w-6" alt="Nuova Logo" /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Nuova
            </span>
          </Link>
          <div className="flex items-center space-x-12 z-50">
            <div
              className="hidden justify-between items-center w-full md:flex md:w-auto"
              id="mobile-menu-4"
            >
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <Link
                    to="/page2"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 "
                  >
                    Residents
                  </Link>
                </li>
                <li>
                  <Link
                    to="/page3"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 "
                    aria-current="page"
                  >
                    Landlord Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/page4"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 "
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/page5"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 "
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    to="/page6"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/propertyviewings"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0"
                  >
                    Prospects
                  </Link>
                </li>
              </ul>
            </div>
            {/* <button
              type="button"
              className="text-white text-base bg-[#BD8472] px-6 py-2 text-center rounded"
            >
              Log In
            </button> */}
            <Link to="/property-manager-dashboard">
              <button
                type="button"
                className="text-white text-base bg-[#BD8472] px-3 py-2 text-center rounded"
              >
                Property Manager
              </button>
            </Link>
            <Link to="/tenant-portal-dashboard">
              <button
                type="button"
                className="text-white text-base bg-[#BD8472] px-3 py-2 text-center rounded"
              >
                Tenant Portal
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
