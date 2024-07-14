export default function SearchForm() {
  return (
    <form
      id="link-form"
      className="relative flex flex-col w-full -mt-12 space-y-4 shadow-xl
  rounded-lg md:flex-row md:space-y-0"
    >
      <div className="relative group">
        <select
          id="dropdown-select"
          className="select-arrow inline-flex justify-center w-full px-4 py-4 text-md font-small text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none appearance-none pr-10
      md:rounded-none md:rounded-l-md md:outline-none"
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
        className="flex-1 p-3 border-t-1 border-b-1 border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none md:rounded-none md:outline-none"
        placeholder="Search..."
        id="link-input"
      />

      <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2 md:rounded-none md:rounded-r-md md:outline-none">
        Search
      </button>

      <div
        id="err-msg"
        className="absolute left-7 bottom-3 text-red text-sm italic"
      ></div>
    </form>
  );
}
