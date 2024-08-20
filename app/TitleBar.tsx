import Link from "next/link";
import React from "react";
import { FaListCheck } from "react-icons/fa6";

const TitleBar = () => {
  const links = [
    { lable: "All tasks", href: "/tasks" },
    // { lable: "Open tasks", href: "/tasks" },
    // { lable: "Closed tasks", href: "/tasks" },
    { lable: "New Task", href: "/tasks/new" },
  ];

  return (
    <div className="bg-zinc-900 text-white">
      <div className="px-5 h-14 align-center text-center text-emerald-600 text-2xl">
        <FaListCheck />
        <Link href="/">ToDo Task Manager</Link>
      </div>
      <div className="space-x-6 border-b mb-5">
        <nav>
          {links.map((link) => (
            <Link
              href={link.href}
              className="hover:bg-zinc-500 border-t-white px-5 "
            >
              {link.lable}
            </Link>
          ))}
          <Link href="/" className="hover:bg-zinc-500 px-5 text-right">
            Logout
          </Link>
          {/* Account and logout dropdown */}
        </nav>
      </div>
    </div>
  );
};

export default TitleBar;
