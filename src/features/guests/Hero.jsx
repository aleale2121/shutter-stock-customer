// import img from "/assets/images/illustration-working.svg";
// import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container flex flex-row items-center justify-center mt-24 mb-24 mx-auto p-6 lg:flex-row">
      <div className="container mx-auto px-3">
        <h2 className="text-4xl mb-6 font-bold text-center">
          Perfect Content at the Perfect Price
        </h2>
        <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
          Fuel your creativity with high-quality video, audio, and photos. Our
          extensive library offers a world of possibilities, all at accessible
          prices.
        </p>
        {/* <NavLink
            to="/pricing"
            className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
          >
            Get Started
          </NavLink> */}
      </div>

      {/* <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
        <img src={img} alt="" />
      </div> */}
    </div>
  );
}
