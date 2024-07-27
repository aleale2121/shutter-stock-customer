import { NavLink } from "react-router-dom";
import LoginOptions from "./LoginOptions";
import PropTypes from "prop-types";
import PhoneInput from "./PhoneInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

export default function Login({ current }) {
  return (
    // <!-- Global Container -->
    <div className="flex items-center justify-center">
      {/* <!-- Card Container --> */}
      <div className="mx-6 my-4 flex flex-col space-y-10 bg-white shadow-2xl border border-gray-200 rounded-2xl md:flex-row md:space-y-0 md:mb-10 overflow-hidden">
        {/* <!-- Left Side --> */}
        <div className="p-6 md:pl-16 md:pt-12">
          {/* <!-- Top Content --> */}
          <h2 className="font-mono mb-4 text-3xl font-bold">Verify Phone</h2>
          <p className="max-w-sm mb-6 font-sans font-light text-gray-600">
            Verify your phone number to download pictures & videos
          </p>

          {current === "email" ? <EmailInput /> : <PhoneInput />}
          {current === "email" ? <PasswordInput /> : <></>}
          {/* <!-- Middle Content --> */}
          <div className="flex flex-col items-center justify-between mt-4 space-y-6 md:flex-row md:space-y-0">
            <NavLink to="#" className="font-thin text-cyan-700">
              Forgot password
            </NavLink>

            <NavLink
              to={current === "phone" ? "/verify/phone" : "/home"}
              className="w-full md:w-auto py-2 px-10 space-x-4 font-sans font-bold text-white rounded-md shadow-lg  bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
            >
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
          <LoginOptions current={current} />
          <div className="mt-4 text-right">
            <NavLink to="/signup" className="text-sm font-thin text-cyan-700">
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

Login.propTypes = {
  current: PropTypes.string.isRequired,
};
