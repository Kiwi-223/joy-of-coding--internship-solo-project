import React from "react";
import { getAllTasks } from "../actions";
import { TaskType } from "../types";
import taskNav from "../componants/Task";
import TaskNav from "../componants/Task";
import FilterBar from "../componants/FilterBar";

const tasks = {};

// interface Props {
//   tasks: TaskType[]
// }

// const taskNav = ({tasks}: Props) => {
// return (
//   <div>
// {tasks.map((task: TaskType) => {
// return(
//   <>
//   console.log({task.title})
// <div>{task.title}</div>
// </>
//   )
// })}

//   </div>
// )
// }

async function tasksPage() {
  const tasks: TaskType[] = await getAllTasks();
  console.log(tasks);

  return (
    <div>
      <FilterBar />
      <TaskNav tasks={tasks} />
    </div>
  );
}

export default tasksPage;
