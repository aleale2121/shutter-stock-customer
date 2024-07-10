import { NavLink } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="py-16 bg-veryDarkViolet">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        <img src="/assets/images/logo.svg" alt="" />

        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <NavLink
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Brand contents
              </NavLink>
              <NavLink
                to="/contact"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Content request
              </NavLink>
              <NavLink
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Analytics
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">
              Resources
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <NavLink
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Blog
              </NavLink>
              <NavLink
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Developers
              </NavLink>
              <NavLink
                to="/contact"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Support
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Company</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <NavLink
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                About
              </NavLink>
              <NavLink
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Our Team
              </NavLink>
              <NavLink
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Careers
              </NavLink>
              <NavLink
                to="/contact"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex space-x-6">
          <a href="#">
            <img src="/assets/images/icon-facebook.svg" alt="" className="ficon" />
          </a>
          <a href="#">
            <img src="/assets/images/icon-twitter.svg" alt="" className="ficon" />
          </a>
          <a href="#">
            <img src="/assets/images/icon-pinterest.svg" alt="" className="ficon" />
          </a>
          <a href="#">
            <img src="/assets/images/icon-instagram.svg" alt="" className="ficon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
