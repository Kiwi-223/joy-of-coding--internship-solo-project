import Link from "next/link";
import React from "react";
import { FaListCheck } from "react-icons/fa6";

const TitleBar = () => {
  const links = [
    { lable: "All tasks", href: "/" },
    { lable: "Open tasks", href: "/" },
    { lable: "Closed tasks", href: "/" },
    { lable: "New task", href: "/" },
  ];

  return (
    <>
      <div className="flex px-5 h-14 items-center text-center text-emerald-600">
        <FaListCheck />
        <Link href="/">To Do Tasks</Link>
      </div>
      <div className=" space-x-6 border-b mb-5  h-14">
        <nav>
          {links.map((link) => (
            <Link href={link.href} className="hover:bg-zinc-500 px-5 ">
              {link.lable}
            </Link>
          ))}
          {/* Account and logout dropdown */}
        </nav>
        <nav className="text-right">
          {/* Account and logout dropdown */}
          <Link href="/" >
            Logout
          </Link>{" "}
          {/* New task */}
        </nav>
      </div>
    </>
  );
};

export default TitleBar;
