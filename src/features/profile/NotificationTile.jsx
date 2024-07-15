import { HiOutlineTrash, HiEllipsisVertical } from "react-icons/hi2";
import PropTypes from "prop-types";
import Modal from "../../components/Modal";
// import Menus from "../../components/Menus";
import ConfirmDelete from "../../components/ConfirmDelete";

const ICONS = {
  "subscription-activated": (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4M7 12l-2-2"
      ></path>
    </svg>
  ),
  "subscription-cancelled": (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  ),
  "invitation-accepted": (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  ),
};

const ICON_COLORS = {
  "invitation-accepted": "bg-green-200 text-green-500 border-green-400",
  "subscription-activated": "bg-blue-100 text-blue-500 border-blue-400",
  "subscription-cancelled": "bg-red-100 text-red-500 border-red-300 ",
};

export default function ListTile({ id, type, title, description }) {
  const iconStyle = `w-10 h-10  border ${ICON_COLORS[type]} rounded-full flex items-center justify-center`;
  return (
    <li
      key={id}
      className="bg-gray-50 border border-gray-200 shadow-sm rounded-lg flex items-center px-6 py-4 "
    >
      <div className={iconStyle}>{ICONS[type]}</div>
      <div className="ml-4 flex-grow">
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Modal>
          {/* <Menus.Menu>
            <Menus.Toggle id={id} />
            <Menus.List id={id}>
              <Menus.Button icon={<HiEye />} onClick={() => {}}>
                See details
              </Menus.Button> */}

          <Modal.Open opens="delete-notificatiofn">
            <HiOutlineTrash
              role="button"
              className="w-5 h-5 text-red-500 hover:text-red-600 cursor-pointer"
            />
          </Modal.Open>
          {/* </Menus.List>
          </Menus.Menu> */}

          <Modal.Window name="delete-notificatiofn">
            <ConfirmDelete
              resourceName="notification"
              disabled={false}
              onConfirm={() => {}}
            />
          </Modal.Window>
        </Modal>
        {/* <HiOutlineTrash className="w-5 h-5 text-red-500 hover:text-red-600 cursor-pointer" /> */}
        <HiEllipsisVertical className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
      </div>
    </li>
  );
}

ListTile.propTypes = {
  id: PropTypes.any,
  type: PropTypes.any,
  title: PropTypes.any,
  description: PropTypes.node.isRequired,
};
