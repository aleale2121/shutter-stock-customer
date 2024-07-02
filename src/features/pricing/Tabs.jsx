export default function Tabs() {
  return (
    <div className="container w-3/4 mb-4 mx-auto border-b border-gray-20">
      <ul
        className="flex flex-row items-center justify-center md:mx-auto -mb-px text-sm font-medium text-center"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
        data-tabs-active-classes="bg-slate-700 text-white"
        data-tabs-inactive-classes="border-2 border-gray-20"
      >
        <li className="me-2 w-full" role="presentation">
          <button
            className="w-full inline-block p-4 border-2 rounded-l-lg"
            id="individual-tab"
            data-tabs-target="#individual"
            type="button"
            role="tab"
            aria-controls="individual"
            aria-selected="false"
          >
            Individual
          </button>
        </li>
        <li className="me-2 w-full" role="presentation">
          <button
            className="w-full inline-block p-4 border-2 rounded-r-lg"
            id="business-tab"
            data-tabs-target="#business"
            type="button"
            role="tab"
            aria-controls="business"
            aria-selected="false"
          >
            Business
          </button>
        </li>
      </ul>
    </div>
  );
}
