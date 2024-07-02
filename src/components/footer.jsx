import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Website Name. All Rights
          Reserved.
        </p>
        <nav>
          <ul className="flex">
            <li className="mr-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
