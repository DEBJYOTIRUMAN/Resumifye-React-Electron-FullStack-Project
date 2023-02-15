import React from "react";

const Dropdown = ({ user, signOut, navigate }) => {
  return (
    <div className="w-44 rounded-lg divide-y divide-gray-100 shadow dark:divide-[#38444d] mr-6 ml-auto border border-[#38444d]">
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div>
          {user.firstName} {user.lastName}
        </div>
        <div className="font-medium truncate text-xs">{user.email}</div>
      </div>
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
        <li>
          <div
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-white cursor-pointer"
            onClick={() => navigate("/home")}
          >
            Dashboard
          </div>
        </li>
        <li>
          <div
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-white cursor-pointer"
            onClick={() => navigate("/projects")}
          >
            Projects
          </div>
        </li>
        <li>
          <div
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-white cursor-pointer"
            onClick={() => navigate("/resume")}
          >
            Resume
          </div>
        </li>
      </ul>
      <div className="py-1">
        <div
          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-slate-800 dark:text-gray-200 dark:hover:text-white cursor-pointer"
          onClick={() => signOut()}
        >
          Sign out
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
