import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-primary text-accent h-[70px] w-full">
      <div className="max-w-7xl mx-auto flex items-center px-2 h-full justify-between">
        <div className="h-full w-auto">
          <img src="./logo.png" alt="" className="object-cover h-full" />
        </div>
        <div>
          <MenuIcon onClick={() => setIsOpen(!isOpen)} className="md:hidden" />
        </div>
        <ul className="w-fit hidden md:flex flex-col md:flex-row items-center justify-center gap-12 font-bold text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/custom-cake"
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-white"
              }
            >
              Custom Cake
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-white"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {isOpen && (
          <div className="absolute w-2/3 right-0 h-[calc(100vh-70px)] top-[70px] bg-primary">
            <ul className="w-full flex flex-col items-center justify-center gap-12 font-bold text-xl p-[30px]">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/custom-cake"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-white"
                  }
                >
                  Custom Cake
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-white"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-white"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
