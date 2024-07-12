import Modal from "../../components/Modal";
import { HiEye, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../components/ConfirmDelete";
import Menus from "../../components/Menus";
import PropTypes from "prop-types";

export default function TeamMemberTableMenu({ id }) {
  return (
    <Modal>
      <Menus.Menu>
        <Menus.Toggle id={id} />
        <Menus.List id={id}>
          <Menus.Button icon={<HiEye />} onClick={() => {}}>
            See details
          </Menus.Button>

          <Modal.Open opens="delete-notification">
            <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
          </Modal.Open>
        </Menus.List>
      </Menus.Menu>

      <Modal.Window name="delete-notification">
        <ConfirmDelete
          resourceName="contact"
          disabled={false}
          onConfirm={() => {}}
        />
      </Modal.Window>
    </Modal>
  );
}

TeamMemberTableMenu.propTypes = {
  id: PropTypes.any.isRequired,
};
