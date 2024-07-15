import { NavLink } from "react-router-dom";
export default function Signup() {
  return (
    // <!-- Global Container -->
    <div className="flex items-center justify-center">
      {/* <!-- Card Container --> */}
      <div
        className="mx-6 my-4 flex flex-col space-y-10 bg-white  border border-gray-200 shadow-2xl rounded-2xl 
          md:flex-row md:items-center md:w-3/4 md:justify-center md:space-y-0 md:mb-10 overflow-hidden"
      >
        {/* <!-- Left Side --> */}
        <div className="p-6 md:pl-16 md:pt-4 md:w-3/5">
          {/* <!-- Top Content --> */}
          <h2 className="font-mono mb-4 text-3xl font-bold">Sign up</h2>
          <p className="max-w-sm mb-6 font-sans font-light text-gray-600">
            Create an account to download pictures & videos
          </p>

          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Enter your full name"
          />

          <input
            type="email"
            className="w-full px-3 mt-4 py-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Enter your email address"
          />

          <input
            type="password"
            className="w-full px-3 py-2 mt-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Enter your password"
          />

          <input
            type="password"
            className="w-full px-3 py-2 mt-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Confirm your password"
          />

          {/* <!-- Middle Content --> */}
          <div className="flex flex-col items-center justify-between mt-4 space-y-6 md:flex-row md:space-y-0">
            <NavLink to="#" className="font-thin text-cyan-700">
              Forgot password
            </NavLink>

            <NavLink
              to="/home"
              className="w-full md:w-auto py-2 px-10 space-x-4 font-sans font-bold text-white rounded-md shadow-lg  bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
            >
              <span>Sign up</span>
            </NavLink>
          </div>

          {/* <!-- Border --> */}
          <div className="mt-4 border-b border-b-gray-300"></div>

          {/* <!-- Bottom Content --> */}
          <p className="py-4 text-sm font-thin text-center text-gray-400">
            or sign up with
          </p>

          {/* <!-- Bottom Buttons Container --> */}
          <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
            <NavLink
              to="/home"
              className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2"
            >
              <img src="/assets/images/facebook.png" alt="" className="w-6" />
              <span className="font-thin">Facebook</span>
            </NavLink>
            <NavLink
              to="/home"
              className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2"
            >
              <img src="/assets/images/google.png" alt="" className="w-6" />
              <span className="font-thin">Google</span>
            </NavLink>
          </div>
          <div className="mt-4 text-right">
            <NavLink
              to="/login"
              href="#"
              className="text-sm font-thin text-cyan-700"
            >
              Login if you already have an account
            </NavLink>
          </div>
        </div>
        {/* <!-- Right Side --> */}
          <img
            src="/assets/images/image.jpg"
            alt=""
            className="w-2/5 hidden md:block object-cover"
          />
      </div>
    </div>
  );
}
