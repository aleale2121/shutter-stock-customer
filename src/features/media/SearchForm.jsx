export default function SearchForm() {
  return (
    <form
      id="link-form"
      className="relative flex flex-col w-full space-y-4 shadow-xl
  rounded-lg md:flex-row md:space-y-0 -mt-12
  z-1 border-2  md:border-slate-700"
    >
      <div className="relative group">
        <select
          id="dropdown-select"
          className="select-arrow inline-flex justify-center w-full px-4 py-3 font-small text-white md:text-xl bg-blue-950 rounded-md shadow-sm focus:outline-none appearance-none pr-10
      md:rounded-none md:rounded-l-md md:outline-none"
        >
          <option
            className="block px-3 py-3  text-white cursor-pointer"
            selected
          >
            All
          </option>
          <option className="block px-3 py-3 text-white cursor-pointer">
            Photo
          </option>
          <option className="block px-3 py-3 text-white cursor-pointer">
            Video
          </option>
          <option className="block px-3 py-3 text-white cursor-pointer">
            Gif
          </option>
          <option className="block px-3 py-3 text-white cursor-pointer">
            Animations
          </option>
        </select>
        <div className="custom-arrow"></div>
      </div>

      <input
        type="text"
        className="flex-1 p-3 border-t-2rounded-lg placeholder-gray-500 focus:outline-none md:rounded-none md:outline-none md:border-r-2 md:border-slate-700"
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
