"use client";
import React, { useState } from "react";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import DropDown from "./PriorityDropDown";
import { statusFilter, priorityFilter, TaskType } from "../types";
import { LuX } from "react-icons/lu";
import FilterSelectDropDown from "./FilterSelectDropDown";

interface Props {
  allTasks: TaskType[];
  setFilteredTasks: (tasks: TaskType[]) => void;
}

const FilterBar = ({ allTasks, setFilteredTasks }: Props) => {
  const [tasks, setTasks] = useState<TaskType[]>(allTasks);
  const [priority, setPriority] = useState("Any");
  const [status, setStatus] = useState("Any");
  const [isFiltered, setIsFiltered] = useState(false);

  const handlePriority = (priority: string) => {
    console.log(priority);
    if (priority === "Any") {
      setFilteredTasks(tasks);
    } else {
      const newTasks = tasks.filter((task) => task.priority === priority);
      setFilteredTasks(newTasks);
    }
  };

  const handleStatus = (status: string) => {
    // console.log(status === "Completed");
    if (status === "Any") {
      setFilteredTasks(tasks);
    } else {
      if (status === "Completed") {
        // console.log(status === "Completed")
        const newTasks = tasks.filter((task) => task.completed === true);
        // console.log(newTasks)
        setFilteredTasks(newTasks);
      } else {
        const newTasks = tasks.filter((task) => task.completed === false);
        setFilteredTasks(newTasks);
      }
      setIsFiltered(true);
    }
  };

  const handleReset = () => {
    // handleStatus("Completed");
    // setFilteredTasks(allTasks);
  };

  return (
    <Box>
      <Flex gap="2">
        <Text>Filters:</Text>
        <FilterSelectDropDown
          title="Status"
          options={statusFilter}
          onChange={() => setIsFiltered}
        ></FilterSelectDropDown>
        <FilterSelectDropDown
          title="Priority"
          options={priorityFilter}
          onChange={() => setIsFiltered}
        ></FilterSelectDropDown>
        {isFiltered && (
          <Button variant="ghost" onClick={handleReset}>
            Clear Filters <LuX className="ml-2 h-4 w-4" />
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default FilterBar;
