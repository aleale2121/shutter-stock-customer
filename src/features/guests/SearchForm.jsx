export default function SearchForm() {
  return (
    <form
      id="link-form"
      className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
    >
      <div className="relative group">
        <select
          id="dropdown-select"
          className="select-arrow  inline-flex justify-center w-full px-4 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500  appearance-none pr-10"
        >
          <option
            className="block px-4 py-2 text-gray-700 cursor-pointer"
            selected
          >
            All
          </option>
          <option className="block px-4 py-2 text-gray-700 cursor-pointer">
            Photo
          </option>
          <option className="block px-4 py-2 text-gray-700 cursor-pointer">
            Video
          </option>
          <option className="block px-4 py-2 text-gray-700 cursor-pointer">
            Gif
          </option>
          <option className="block px-4 py-2 text-gray-700 cursor-pointer">
            Animations
          </option>
        </select>
      </div>

      <input
        type="text"
        className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
        placeholder="Search..."
        id="link-input"
      />

      <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
        Search
      </button>

      <div
        id="err-msg"
        className="absolute left-7 bottom-3 text-red text-sm italic"
      ></div>
    </form>
  );
}
