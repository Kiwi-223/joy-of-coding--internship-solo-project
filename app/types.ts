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

export const statusFilter = [
  {
    label: "Completed",
    value: true,
  },
  {
  
    label: "Incomplete",
    value: false,
  }

]