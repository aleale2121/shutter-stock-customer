export default function UpdatePassword() {
  return (
    <div className="grid max-w-2xl mx-auto">
      <div className="items-center sm:mt-14 text-[#202142]">
        <div className="mb-2 sm:mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-indigo-900 "
          >
            Current Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            placeholder="your current password"
            required
          />
        </div>

        <div className="mb-2 sm:mb-6">
          <label
            htmlFor="new-password"
            className="block mb-2 text-sm font-medium text-indigo-900 "
          >
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            placeholder="your new password"
            required
          />
        </div>
        <div className="mb-2 sm:mb-6">
          <label
            htmlFor="confirm-password"
            className="block mb-2 text-sm font-medium text-indigo-900 "
          >
            Confirm new password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            placeholder="re-type new password"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
