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
// import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
// import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import TaskForm from "@/app/componants/TaskForm";

// interface TaskForm {
//   title: string;
//   description: string;
//   priority: string;
//   dueDate: Date;
// }

const newTask = () => {
  // const router = useRouter();
  // const [priorityLevel, setPriorityLevel] = useState("Low");
  // const [startDate, setStartDate] = useState(new Date());
  // const { register, control, handleSubmit, setValue } = useForm<TaskForm>({
  //   defaultValues: { dueDate: startDate, priority: priorityLevel },
  // });

  // const handleDateSelect = (date: Date) => {
  //   setValue("dueDate", date);
  //   setStartDate(date);
  // };

  // const handleCancel = () => {
  //   router.push("/tasks");
  // };
  return (
    <TaskForm />
    // <form
    //   className="w-3/4 h-fit"
    //   onSubmit={handleSubmit(async (data) => {
    //     await axios.post("/api/tasks", data);
    //     router.push("/tasks");
    //   })}
    // >
    //   <Card size="2">
    //     <Flex direction="column" gap="3">
    //       <Grid gap="1">
    //         <Text as="div" weight="bold" size="2" mb="1">
    //           New Task
    //         </Text>
    //         <Flex className="gap-5">
    //           <TextField.Root
    //             className="w-1/2"
    //             placeholder="Title"
    //             {...register("title")}
    //           ></TextField.Root>
    //           <PriorityDropDown
    //             onChange={(priorityLevel: string) => {
    //               console.log(priorityLevel);
    //               setValue("priority", priorityLevel);
    //             }}
    //           />

    //           <Text className="gap-1">
    //             Due Date:
    //             <DatePicker
    //               {...register("dueDate")}
    //               selected={startDate}
    //               onChange={(date) => handleDateSelect(date)}
    //             />
    //           </Text>
    //         </Flex>
    //         <TextArea
    //           className="h-72"
    //           placeholder="Description"
    //           {...register("description")}
    //         />
    //       </Grid>
    //       <Grid columns="2" gap="2">
    //         {/* <Button variant="surface" onChange={handleCancel}>Cancel</Button> */}
    //         <Button>Save</Button>
    //       </Grid>
    //     </Flex>
    //   </Card>
    // </form>
  );
};

export default newTask;
