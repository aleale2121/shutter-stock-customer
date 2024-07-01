import { useEffect } from "react";
import logo from '../assets/images/logo.svg'

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
    <nav className="relative container mx-auto p-6">
      {/* Flex Container For All Items */}
      <div className="flex items-center justify-between">
        {/* Flex Container For Logo/Menu */}
        <div className="flex items-center space-x-20">
          {/* Logo */}
          <img src={logo} alt="" />
          {/* Left Menu */}
          <div className="hidden space-x-8 font-bold lg:flex">
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Home
            </a>
            <a
              href="pricing.html"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </a>
            <a
              href="contactus.html"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Contact us
            </a>
          </div>
        </div>

        {/* Right Buttons Menu */}
        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <div className="hover:text-veryDarkViolet">Login</div>
          <a
            href="#"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
          >
            Sign Up
          </a>
        </div>

        {/* Hamburger Button */}
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
        className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <a href="#" className="w-full text-center">
            Home
          </a>
          <a href="pricing.html" className="w-full text-center">
            Pricing
          </a>
          <a href="contactus.html" className="w-full text-center">
            Contact us
          </a>
          <a
            href="#"
            className="w-full pt-6 border-t border-gray-400 text-center"
          >
            Login
          </a>
          <a href="#" className="w-full py-3 text-center rounded-full bg-cyan">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
