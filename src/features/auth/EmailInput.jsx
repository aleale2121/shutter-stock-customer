import { FaEnvelope } from "react-icons/fa";

export default function EmailInput() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
        <FaEnvelope className="text-gray-400" />
      </div>
      <input
        id="email-input"
        type="text"
        className="w-full block  px-3 py-2  ps-10 p-2.5  border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
        placeholder="Enter your email"
        required
      />
    </div>
  );
}
