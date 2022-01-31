import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-900 text-white">
      <nav className="max-w-7xl flex justify-around py-6 mx-auto">
      <div className="w-full text-2xl">PORTFOLIO</div>
      <span>Imran Yemoh</span>
        {/* <ul className="flex w-3/5 text-lg justify-around">
          <li>Home</li>
          <li>BLog</li>
          <li>Services</li>
        </ul>
        <div className="w-full text-center text-2xl">PORTFOLIO</div>
        <ul className="flex w-3/5 text-lg justify-around">
          <li>Home</li>
          <li>BLog</li>
          <li>Services</li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Navbar;
