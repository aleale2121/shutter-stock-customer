import PropTypes from "prop-types";

const Tag = ({ bgColor, textColor, children }) => {
  return (
    <span className={`text-sm font-bold px-3 py-1 rounded-full ${bgColor} ${textColor}`}>
      {children}
    </span>
  );
};

Tag.propTypes = {
  bgColor: PropTypes.any.isRequired,
  textColor: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tag;
