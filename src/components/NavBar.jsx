import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  useEffect(() => {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    function navToggle() {
      btn.classList.toggle("open");
      menu.classList.toggle("flex");
      menu.classList.toggle("hidden");
    }

    btn.addEventListener("click", navToggle);

    return () => {
      btn.removeEventListener("click", navToggle);
    };
  }, []);

  return (
    <nav className="relative container mx-auto px-6 bg-veryDarkViolet">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <div className="w-60 max-w-full px-4">
            <NavLink to="#" className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
              />
            </NavLink>
          </div>

          <div className="hidden space-x-8 font-bold lg:flex">
            <NavLink to="/home" className="text-grayishViolet hover:text-white">
              Home
            </NavLink>
            <NavLink
              to="/pricing"
              className="text-grayishViolet hover:text-white"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/contact"
              className="text-grayishViolet hover:text-white"
            >
              Contact us
            </NavLink>
          </div>
        </div>

        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <a href="#" className="hover:text-white">
            Login
          </a>
          <a
            href="#"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
          >
            Sign Up
          </a>
        </div>

        <button
          id="menu-btn"
          className="block hamburger lg:hidden focus:outline-none"
          type="button"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        className="absolute hidden md:hidden max-w-[400px] min-w-[350px] p-6 rounded-lg bg-dark2 right-6 top-20 z-100"
      >
        <div className="flex items-center justify-center w-full font-bold text-white rounded-sm">
          <div className="flex flex-col items-center justify-center w-full space-y-6 ">
            <NavLink to="/home" className="w-full text-center">
              Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </NavLink>
            <NavLink
              to="/pricing"
              replace={true}
              reloadDocument={true}
              className="w-full text-center"
            >
              Pricing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </NavLink>
            <NavLink to="/contact" className="w-full text-center">
              Contact us
            </NavLink>
            <a
              href="#"
              className="w-full pt-6 border-t border-gray-400 text-center hover:text-white"
            >
              Login &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <a
              href="#"
              className="w-full py-3 text-center rounded-full bg-cyan"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
