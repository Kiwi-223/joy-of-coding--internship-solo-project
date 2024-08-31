import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { FaListCheck } from "react-icons/fa6";

const TitleBar = () => {
  const links = [
    { lable: "All tasks", href: "/tasks" },
    { lable: "New Task", href: "/tasks/new" },
  ];

  return (
    <div className="bg-zinc-700 text-white">
      <Link
        href="/"
        className="px-5 h-14 text-green-700 text-2xl justify-center items-center flex gap-1"
      >
        <FaListCheck /> ToDo Task Manager
      </Link>

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
        </nav>
      </div>
    </div>
  );
};

export default TitleBar;
