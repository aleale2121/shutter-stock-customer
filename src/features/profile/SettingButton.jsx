import PropTypes from "prop-types";
import Modal from "../../components/Modal";
import InvitationForm from "./InvitationForm";

export default function SettingButton({ children }) {
  return (
    <Modal>
      <Modal.Open opens="create-invitation">
        <button
          type="submit"
          className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          {children}
        </button>
      </Modal.Open>

      <Modal.Window name="create-invitation">
        <InvitationForm />
      </Modal.Window>
    </Modal>
  );
}

SettingButton.propTypes = { children: PropTypes.node.isRequired };
