import React from "react";
import logo from "../assets/ACMLogo.png";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          
          {/* Left: Logo + Text */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="ACM Logo" className="w-26" />
            <p className="text-black text-sm font-semibold leading-tight">
              Association for <br />
              Computing Machinery
            </p>
          </div>

          {/* Center: Nav Links */}
          <div className="flex items-center gap-8 text-sm font-medium">
            {["Home", "About", "Events", "Gallery", "Team", "Resources"].map(
              (item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-blue-600"
                  }
                >
                  {item}
                </NavLink>
              )
            )}
          </div>

          {/* Right: Button */}
          <div>
            <button className="bg-blue-800 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-900 hover:cursor-pointer transition">
              Join Us
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default NavBar;
