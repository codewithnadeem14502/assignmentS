import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 mt-5 flex justify-between items-center">
      <div>
        <h2 className="text-gray-500 ">@ 2024 ProfileScanner.com</h2>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-4">
          <li className="text-gray-500  ">Contact Us</li>
          <li className="text-gray-500 ">Privacy </li>
          <li className="text-gray-500 ">Terms</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
