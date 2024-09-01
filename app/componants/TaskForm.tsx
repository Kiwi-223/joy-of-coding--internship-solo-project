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
  Checkbox,
} from "@radix-ui/themes";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { TaskType } from "../types";
import { updateTask, newTask } from "../actions";
import { Priority } from "@prisma/client";

interface Props {
  task?: TaskType;
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
  const formTitle = task ? "Edit Task" : "New Task";
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

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: string
  ) => {
    e.preventDefault();
    if (type === "save") {
      if (task) {
        let updatedTask: TaskType;
        updatedTask = { ...formData, id: task.id };
        await updateTask(updatedTask);
      } else {
        try {
          await newTask(formData);
        } catch (error) {
          console.log("error: ", error);
        }
      }
    }
    router.push("/tasks");
    router.refresh();
  };

  return (
    <form className="w-fit h-fit">
      <Card size="2">
        <Flex direction="column" gap="3">
          <Grid gap="1">
            <Text as="div" weight="bold" size="4" mb="1">
              {formTitle}
            </Text>

            <Flex className="gap-5" align="center">
              <TextField.Root
                className="min-w-44"
                placeholder="Title"
                {...register("title", {
                  onChange: (e) =>
                    setFormData({ ...formData, title: e.target.value }),
                })}
              />

              <PriorityDropDown
                currentPriority={formData.priority}
                onChange={(priorityLevel: Priority) => {
                  setFormData({ ...formData, priority: priorityLevel });
                }}
              />

              <Flex className="gap-1" align="center">
                Due Date:
                <DatePicker
                  {...register("dueDate")}
                  selected={formData.dueDate}
                  onChange={(date) => {
                    if (date) handleDateSelect(date);
                  }}
                />
              </Flex>

              <Flex gap="1" align="center">
                Completed:
                <Checkbox
                  checked={formData.completed}
                  color="green"
                  onCheckedChange={(checked: boolean) =>
                    setFormData({ ...formData, completed: checked })
                  }
                />
              </Flex>
            </Flex>
            <TextArea
              className="h-72"
              placeholder="Description"
              {...register("description", {
                onChange: (e) =>
                  setFormData({ ...formData, description: e.target.value }),
              })}
            />
          </Grid>
          <Flex align={"baseline"}>
            <Button
              color="red"
              variant="surface"
              onClick={(e) => {
                handleSubmit(e, "cancel");
              }}
              size="3"
            >
              Cancel
            </Button>

            <Button
              color="green"
              size="3"
              className="justify-end"
              onClick={(e) => {
                handleSubmit(e, "save");
              }}
            >
              Save
            </Button>
          </Flex>
        </Flex>
      </Card>
    </form>
  );
};

export default TaskForm;
