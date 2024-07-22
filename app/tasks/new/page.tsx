"use client";

import PriorityDropDown from "@/app/componants/priorityDropDown";
import {
  Box,
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
import { useForm, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useRouter } from "next/navigation";

interface TaskForm {
  title: string;
  description: string;
  priority: string;
  dueDate: Date;
}

const newTask = () => {
  const router = useRouter();
  const [priorityLevel, setPriorityLevel] = useState("Low");
  const [startDate, setStartDate] = useState(new Date());
  const { register, control, handleSubmit, setValue } = useForm<TaskForm>({
    defaultValues: { dueDate: startDate, priority: priorityLevel },
  });
  const handleDateSelect = (date: Date) => {
    setValue("dueDate", date);
    setStartDate(date);
    // setValue("dueDate", startDate);
  };
  return (
    <form
      className="w-800px"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/tasks", data);
        router.push("/tasks");
      })}
    >
      <Card size="2">
        <Flex direction="column" gap="3">
          <Grid gap="1">
            <Text as="div" weight="bold" size="2" mb="1">
              New Task
            </Text>
            <Flex className="gap-5">
              <TextField.Root
                placeholder="Title"
                {...register("title")}
              ></TextField.Root>
              <PriorityDropDown
                onChange={(priorityLevel) => {
                  setValue("priority", priorityLevel);
                }}
              />

              <Text className="gap-1">
                Due Date:
                <DatePicker
                  {...register("dueDate")}
                  selected={startDate}
                  onChange={(date) => handleDateSelect(date)}
                />
              </Text>
            </Flex>
            <TextArea placeholder="Description" {...register("description")} />
          </Grid>
          <Grid columns="2" gap="2">
            <Button variant="surface">Cancel</Button>
            <Button>Save</Button>
          </Grid>
        </Flex>
      </Card>
      5
    </form>
  );
};

export default newTask;
