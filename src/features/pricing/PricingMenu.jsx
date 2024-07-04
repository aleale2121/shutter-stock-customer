import PropTypes from "prop-types";

function PricingMenu({ children }) {
  return (
    <div
      className="container md:w-3/4 flex flex-col items-center justify-evenly"
      id="default-tab-content"
    >
      {children}
    </div>
  );
}

export default PricingMenu;

PricingMenu.propTypes = {
  children: PropTypes.node,
};
