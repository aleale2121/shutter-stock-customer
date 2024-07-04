import PropTypes from "prop-types";

export default function PricingsContainer({ id, ariaLabelledBy, children }) {
  return (
    <div
      className="hidden container"
      id={id}
      role="tabpanel"
      aria-labelledby={ariaLabelledBy}
    >
      <div className="container flex flex-col items-center justify-center my-6 space-y-6 md:mx-auto md:space-y-0 md:space-x-12 md:flex-row md:my-0">
        {children}
      </div>
    </div>
  );
}

PricingsContainer.propTypes = {
  id: PropTypes.any.isRequired,
  ariaLabelledBy: PropTypes.any.isRequired,
  children: PropTypes.any,
};
