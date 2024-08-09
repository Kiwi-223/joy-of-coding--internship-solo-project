"use client";

import PriorityDropDown from "@/app/componants/PriorityDropDown";
import {
  Card,
  Flex,
  Grid,
  Text,
  Button,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { TaskType } from "../types";
import { updateTask } from "../actions";
import { Priority } from "@prisma/client";

interface Props {
  task: TaskType;
}

interface TaskForm {
  title: string;
  description: string;
  priority: Priority;
  dueDate: Date;
  completed: boolean;
}

const TaskForm = ({ task }: Props) => {
  const router = useRouter();
  const startDate = new Date();
  const [formData, setFormData] = useState<TaskForm>({
    title: task ? task.title : "",
    description: task ? task.description : "",
    completed: task ? task.completed : false,
    dueDate: task ? task.dueDate : startDate,
    priority: task ? task.priority : Priority.low,
  });
  // handleSubmit,
  const { register, setValue } = useForm<TaskForm>({
    defaultValues: {
      title: formData.title,
      dueDate: formData.dueDate,
      priority: formData.priority,
      description: formData.description,
    },
  });

  const handleDateSelect = (date: Date) => {
    setValue("dueDate", date);
    setFormData({ ...formData, dueDate: date });
  };

  const handleSubmit = async () => {
    if (task) {
      let updatedTask: TaskType;
      updatedTask = { ...formData, id: task.id };
      updateTask(updatedTask);
    }
  };
  // handleSubmit(async (data) => {
  //             console.log('updated task',data)
  //             if (task !== null) {
  //                 updateTask(data)
  //             }

  const handleCancel = () => {
    router.push("/tasks");
  };
  return (
    <form
      className="w-3/4 h-fit"
      onSubmit={
        // handleSubmit(async (data) => {
        console.log("updated task")
        //     if (task !== null) {
        //         updateTask(data)
        // }
        // //   await axios.post("/api/tasks", data);
        // //   router.push("/tasks");
        //   })
      }
    >
      <Card size="2">
        <Flex direction="column" gap="3">
          <Grid gap="1">
            <Text as="div" weight="bold" size="2" mb="1">
              Edit Task
            </Text>

            <Flex className="gap-5">
              <TextField.Root
                className="w-1/2"
                placeholder="Title"
                {...register("title")}
              />

              <PriorityDropDown
                onChange={(priorityLevel: Priority) => {
                  setValue("priority", priorityLevel);
                }}
              />

              <Text className="gap-1">
                Due Date:
                <DatePicker
                  {...register("dueDate")}
                  selected={formData.dueDate}
                  onChange={(date) => handleDateSelect(date)}
                />
              </Text>
            </Flex>

            <TextArea
              className="h-72"
              placeholder="Description"
              {...register("description")}
            />
          </Grid>
          <Grid columns="2" gap="2">
            {/* <Button variant="surface" onChange={handleCancel}>Cancel</Button> */}
            <Button>Save</Button>
          </Grid>
        </Flex>
      </Card>
    </form>
  );
};

export default TaskForm;
