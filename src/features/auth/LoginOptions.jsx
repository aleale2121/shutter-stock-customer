import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import PropTypes from "prop-types";

function LoginOptions({ current }) {
  const phone = (
    <NavLink
      to={current === "phone" ? "" : "/login/phone"}
      className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2"
    >
      <FaPhoneAlt className="w-6 text-blue-700" />
      <span className="font-thin">Phone</span>
    </NavLink>
  );

  const email = (
    <NavLink
      to={current === "email" ? "" : "/login/email"}
      className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2"
    >
      <FaEnvelope className="w-6 text-blue-700" />
      <span className="font-thin">Email</span>
    </NavLink>
  );

  const google = (
    <NavLink className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
      <img src="/assets/images/google.png" alt="" className="w-6" />
      <span className="font-thin">Google</span>
    </NavLink>
  );
  return (
    <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
      {google}
      {current === "email" ? phone : email}
    </div>
  );
}

LoginOptions.propTypes = {
  current: PropTypes.string.isRequired,
};

export default LoginOptions;
