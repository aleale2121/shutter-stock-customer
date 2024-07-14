import Button from "./Button";
import Heading from "./Heading";
import PropTypes from "prop-types";

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div className="container p-8 w-96 flex flex-col gap-3">
      <Heading as="h3">Delete {resourceName}</Heading>
      <p className="text-gray-500 mb-3">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-3">
        <Button
          variation="secondary"
          size="small"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          variation="danger"
          size="small"
          disabled={disabled}
          onClick={onConfirm}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

ConfirmDelete.propTypes = {
  resourceName: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  onCloseModal: PropTypes.func.isRequired,
};

export default ConfirmDelete;
