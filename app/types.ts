import { Priority } from "@prisma/client";


export type TaskType = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    priority: Priority;
    dueDate: Date;
  };

  export const priorities = [
    {
      label: "Low",
      value: "low",
    },
    {
      label: "Medium",
      value: "medium",
    },
    {
      label: "High",
      value: "high",
    },
    {
    
      label: "Urgent",
      value: "urgent",
    }
  ]

export const priorityFilter = [
  "Any",
  "Low",
  "Medium",
  "High",
  "Urgent"
]

export const statusFilter = [
  "Any",
  "Completed",
  "Incomplete"
]