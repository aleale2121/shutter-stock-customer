import PropTypes from "prop-types";

export default function PricingTabMenu({ children }) {
  return (
    <div
      className="container md:w-3/4 flex flex-col items-center justify-evenly"
      id="default-tab-content"
    >
      <div
        className="hidden container"
        id="individual"
        role="tabpanel"
        aria-labelledby="individual-tab"
      >
        <div className="container flex flex-col items-center justify-center my-6 space-y-6 md:mx-auto md:space-y-0 md:space-x-12 md:flex-row md:my-0">
          {children}
        </div>
      </div>
    </div>
  );
}

PricingTabMenu.propTypes = {
  children: PropTypes.any,
};
