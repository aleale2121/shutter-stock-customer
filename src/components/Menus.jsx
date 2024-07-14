import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import PropTypes from "prop-types";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);
  const close = () => setOpenId("");
  const open = setOpenId;
  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}
Menus.propTypes = { children: PropTypes.node.isRequired };

function Menu({ children }) {
  return <div className="flex items-center justify-end">{children}</div>;
}
Menu.propTypes = { children: PropTypes.node.isRequired };

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);
  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    openId === "" || openId !== id ? open(id) : close();
  }
  return (
    <button
      className="bg-none border-none p-2 rounded transition-all hover:bg-gray-200"
      onClick={handleClick}
    >
      <HiEllipsisVertical className="w-7 h-7 text-gray-700" />
    </button>
  );
}
Toggle.propTypes = { id: PropTypes.string.isRequired };

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);
  if (openId !== id) return null;
  return createPortal(
    <ul
      className="fixed bg-white shadow-lg rounded-lg"
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body
  );
}
List.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <button
        className="w-full text-left bg-none border-none p-4 text-lg transition-all flex items-center gap-3 hover:bg-gray-200 rounded-lg"
        onClick={handleClick}
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}
Button.propTypes = {
  icon: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
