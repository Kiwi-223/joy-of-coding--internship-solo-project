import { Priority } from "@prisma/client";


export type TaskType = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    priority: Priority;
    dueDate: Date;
  };

  export const priotities = [
    "Low",
    "Medium",
    "High",
    "Urgent"
]

export const priorityFilters = [
  "All",
  "Low",
  "Medium",
  "High",
  "Urgent"
]