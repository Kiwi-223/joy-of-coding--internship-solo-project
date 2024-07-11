import Link from "next/link";
import React from "react";
import { FaListCheck } from "react-icons/fa6";

const TitleBar = () => {
  return (
    <>
      <div className="flex px-5 h-14 items-center text-center text-emerald-600">
        <FaListCheck />
        <Link href="/">To Do Tasks</Link>
      </div>
      <div className="flex space-x-6 border-b mb-5 px-5 h-14">
        <nav className="items-center  hover:bg-zinc-500">
          <Link href="/">All tasks</Link> {/* All tasks */}
          <Link href="/">Open tasks</Link> {/* Open tasks */}
          <Link href="/">Finished tasks</Link> {/* Finished tasks */}
          <Link href="/">New task</Link> {/* New task */}
          {/* Account and logout dropdown */}
        </nav>
        <nav className="flex text-right">
          {/* Account and logout dropdown */}
          <Link href="/" className="flex text-right">
            Logout
          </Link>{" "}
          {/* New task */}
        </nav>
      </div>
    </>
  );
};

export default TitleBar;
