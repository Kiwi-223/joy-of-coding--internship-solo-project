import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <div className="text-4xl m-4">Welcome to ToDo Task Manager</div>
      <div>
        Click
        <Link href={"/tasks"} className="text-green-700">
          {" "}
          here{" "}
        </Link>
        to view all tasks
      </div>
      <div>
        Click
        <Link href={"/tasks/new"} className="text-green-700">
          {" "}
          here{" "}
        </Link>
        to create a new task
      </div>
    </div>
  );
}
