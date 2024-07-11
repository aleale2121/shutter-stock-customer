export default function ContactForm() {
  return (
    <form className="container flex flex-col max-w-sm  md:max-w-md mx-auto mt-4 px-8 py-4 rounded-md text-[#202142]">
      <label
        htmlFor="email-address-icon"
        className="block text-sm font-medium text-indigo-900 dark:text-white"
      >
        Your Email
      </label>
      <div className="relative mb-8">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-indigo-500 dark:text-indigo-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
        </div>
        <input
          type="text"
          id="email-address-icon"
          className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-md rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full ps-10 px-6 py-2.5"
          placeholder="name@gmail.com"
        />
      </div>
     
      <textarea
        id="message"
        rows="6"
        className="mb-8 block p-3 px-6 w-full text-md text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Leave a comment..."
      ></textarea>
      <div>
        <button className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLlight md:text-base md:py-3 focus:outline-none">
          Submit
        </button>
      </div>
    </form>
  );
}
