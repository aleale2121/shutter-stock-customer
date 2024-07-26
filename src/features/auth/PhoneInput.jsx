import { FaPhoneAlt } from "react-icons/fa";

export default function PhoneInput() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
        <FaPhoneAlt />
      </div>
      <input
        type="text"
        id="phone-input"
        aria-describedby="helper-text-explanation"
        className="w-full block mt-3 px-3 py-2  ps-10 p-2.5 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="123-456-7890"
        required
      />
    </div>
  );
}
