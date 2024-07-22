import React from "react";
import { GET } from "../api/tasks/route";
import { Prisma } from "@prisma/client";


const tasksPage = () => {
  const tasks = GET
  console.log(tasks)
  return <nav>Tasks</nav>;
  
};

export default tasksPage;
