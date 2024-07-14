export default function InvitationForm() {
  return (
    <form className="container flex flex-col px-16 py-12 max-w-sm md:max-w-lg mx-auto  rounded-md text-[#202142]">
      <h1 className="text-2xl font-semibold mb-3">Enter Email</h1>
      <div className="relative mb-6">
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
          className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-md rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full ps-10 px-12 py-2.5"
          placeholder="name@gmail.com"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Invite
        </button>
      </div>
    </form>
  );
}
