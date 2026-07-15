import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b-4 border-black shadow-[0px_3px_0px_0px_black] relative">

      <div className="max-w-8xl mx-auto px-5 py-5 flex items-center justify-between">

        {/* Logo */}
        <p
          className="
          bg-yellow-300
          text-black
          text-xl md:text-2xl
          font-extrabold
          px-6 py-4
          rounded-2xl
          border-4 border-black
          shadow-[8px_8px_0px_0px_black]
          "
        >
          🚀 MediaVerse
        </p>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-2xl px-6 py-4 rounded-xl font-bold border-2 border-black transition-all
              ${
                isActive
                  ? "bg-blue-600 text-white shadow-[5px_5px_0px_0px_black]"
                  : "bg-yellow-300 hover:bg-yellow-400 text-black"
              }`
            }
          >
            🏠 Home
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `text-2xl px-6 py-4 rounded-xl font-bold border-2 border-black transition-all
              ${
                isActive
                  ? "bg-red-500 text-white shadow-[5px_5px_0px_0px_black]"
                  : "bg-green-300 hover:bg-green-400 text-black"
              }`
            }
          >
            ❤️ Collection
          </NavLink>

        </div>

        {/* Mobile Hamburger */}
       <button
  onClick={() => setMenuOpen(!menuOpen)}
  className={`
    md:hidden
    flex
    items-center
    justify-center
    w-14
    h-14
    rounded-2xl
    border-4
    border-black
    text-3xl
    font-black
    transition-all
    duration-300
    ${
      menuOpen
        ? "bg-red-500 text-white rotate-90"
        : "bg-yellow-300 text-black"
    }
    shadow-[6px_6px_0px_black]
    hover:scale-110
    hover:shadow-[9px_9px_0px_black]
    active:scale-95
  `}
>
  {menuOpen ? "✕" : "☰"}
</button>
      </div>

      {/* Mobile Sidebar/Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t-4 border-black shadow-lg">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-xl font-bold border-b hover:bg-yellow-300 text-black"
          >
            🏠 Home
          </NavLink>

          <NavLink
            to="/collection"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 text-xl font-bold hover:bg-green-300 text-black"
          >
            ❤️ Collection
          </NavLink>

        </div>
      )}
    </nav>
  );
};

export default NavBar;