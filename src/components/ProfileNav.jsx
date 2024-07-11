import { NavLink } from "react-router-dom";

export default function ProfileNav() {
  const activeClassName =
    "flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full";
  const defaulClassName =
    "flex items-center px-3 py-2.5 font-semibold  hover:text-indigo-900 hover:border hover:rounded-full";
  return (
    <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
      <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
        <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? activeClassName : defaulClassName
          }
        >
          Pubic Profile
        </NavLink>
        <NavLink
          to="/subscription"
          className={({ isActive }) =>
            isActive ? activeClassName : defaulClassName
          }
        >
          Subscription
        </NavLink>
        <NavLink
          to="/members"
          className={({ isActive }) =>
            isActive ? activeClassName : defaulClassName
          }
        >
          Team Members
        </NavLink>
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive ? activeClassName : defaulClassName
          }
        >
          Notifications
        </NavLink>
      </div>
    </aside>
  );
}
