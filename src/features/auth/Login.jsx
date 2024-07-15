import { NavLink } from "react-router-dom";
export default function Login() {
  return (
    // <!-- Global Container -->
    <div className="flex items-center justify-center">
      {/* <!-- Card Container --> */}
      <div className="mx-6 my-4 flex flex-col space-y-10 bg-white shadow-2xl border border-gray-200 rounded-2xl md:flex-row md:space-y-0 md:mb-10 overflow-hidden">
        {/* <!-- Left Side --> */}
        <div className="p-6 md:pl-16 md:pt-12">
          {/* <!-- Top Content --> */}
          <h2 className="font-mono mb-4 text-3xl font-bold">Log In</h2>
          <p className="max-w-sm mb-6 font-sans font-light text-gray-600">
            Log in to your account to download pictures & videos
          </p>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Enter your email address"
          />

          <input
            type="password"
            className="w-full px-3 py-2 mt-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Enter your password"
          />

          {/* <!-- Middle Content --> */}
          <div className="flex flex-col items-center justify-between mt-4 space-y-6 md:flex-row md:space-y-0">
            <NavLink to="#" className="font-thin text-cyan-700">
              Forgot password
            </NavLink>

            <NavLink to="/home" className="w-full md:w-auto py-2 px-10 space-x-4 font-sans font-bold text-white rounded-md shadow-lg  bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
              <span>Login</span>
            </NavLink>
          </div>

          {/* <!-- Border --> */}
          <div className="mt-4 border-b border-b-gray-300"></div>

          {/* <!-- Bottom Content --> */}
          <p className="py-4 text-sm font-thin text-center text-gray-400">
            or log in with
          </p>

          {/* <!-- Bottom Buttons Container --> */}
          <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
            <NavLink  to="/home" className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <img src="/assets/images/facebook.png" alt="" className="w-6" />
              <span className="font-thin">Facebook</span>
            </NavLink>
            <NavLink to="/home" className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <img src="/assets/images/google.png" alt="" className="w-6" />
              <span className="font-thin">Google</span>
            </NavLink>
          </div>
          <div className="mt-4 text-right">
            <NavLink
              to="/signup"
              className="text-sm font-thin text-cyan-700"
            >
              Signup if you dont have an account
            </NavLink>
          </div>
        </div>
        {/* <!-- Right Side --> */}
        <img
          src="/assets/images/image.jpg"
          alt=""
          className="w-[430px] h-[530px] hidden md:block"
        />
      </div>
    </div>
  );
}
