import React from "react";
import { getAllTasks } from "../actions";
import { TaskType } from "../types";
import Task from "../componants/Task";

async function tasksPage() {
  const tasks: TaskType[] = await getAllTasks();

  return <Task tasks={tasks} />;
}

export default tasksPage;
