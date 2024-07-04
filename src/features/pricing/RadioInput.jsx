import PropTypes from "prop-types";

export default function RadioInput({ id, name, active }) {
  return (
    <input
      className="hidden peer"
      id={id}
      type="radio"
      name={name}
      defaultChecked={active}
    />
  );
}

RadioInput.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired,
  active: PropTypes.bool.isRequired,
};
