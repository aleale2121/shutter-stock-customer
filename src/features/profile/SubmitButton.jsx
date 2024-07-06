import PropTypes from "prop-types";

export default function SubmitButton({ children, pendingLabel, isPending }) {

  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={isPending}
    >
      {isPending ? pendingLabel : children}
    </button>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.any,
  pendingLabel: PropTypes.any.isRequired,
  isPending: PropTypes.bool
};
