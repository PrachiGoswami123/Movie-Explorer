import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row 
                        justify-between items-center 
                        h-auto md:h-16 
                        py-3 md:py-0">

          <Link
            to="#"
            className="text-2xl font-bold text-blue-500 hover:text-blue-400"
          >
            Movie Explorer
          </Link>

          <div className="flex flex-col md:flex-row 
                          space-y-2 md:space-y-0 
                          md:space-x-6 
                          mt-3 md:mt-0">

            <Link to="/" className="hover:text-blue-500 font-bold">
              Home
            </Link>

            <Link to="/movies" className="hover:text-blue-500 font-bold">
              Movies
            </Link>

            <Link to="/fav" className="hover:text-blue-500 font-bold">
              Favourite
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;