"use client";
import React, { useState } from "react";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import { statusFilter, priorities, TaskType } from "../types";
import { LuX } from "react-icons/lu";
import FilterSelectDropDown from "./FilterSelectDropDown";

interface Props {
  allTasks: TaskType[];
  setFilteredTasks: (tasks: TaskType[]) => void;
}

const FilterBar = ({ allTasks, setFilteredTasks }: Props) => {
  const [priority, setPriority] = useState<string[]>([]);
  const [status, setStatus] = useState<boolean[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const filterTasks = (
    selectedPriority: string[],
    selectedStatus: boolean[]
  ) => {
    // console.log(selectedPriority, "priority");
    let filteredTasks = allTasks;

    if (selectedPriority.length > 0) {
      filteredTasks = allTasks.filter((task) => {
        console.log(selectedPriority.includes(task.priority));
        return selectedPriority.includes(task.priority);
      });
    }

    if (selectedStatus.length > 0) {
      filteredTasks = allTasks.filter((task) =>
        selectedStatus.includes(task.completed)
      );
    }

    setFilteredTasks(filteredTasks);
    setIsFiltered(selectedPriority.length > 0 || selectedStatus.length > 0);
  };

  const handlePriority = (selectedPriority: string) => {
    if (priority.includes(selectedPriority)) {
      setPriority(priority.filter((oldValue) => oldValue !== selectedPriority));
      filterTasks(
        priority.filter((oldValue) => oldValue !== selectedPriority),
        status
      );
    } else {
      setPriority([...priority, selectedPriority]);
      filterTasks([...priority, selectedPriority], status);
    }
  };

  const handleStatus = (selectedStatus: boolean) => {
    if (status.includes(selectedStatus)) {
      setStatus(status.filter((oldValue) => oldValue !== selectedStatus));
      filterTasks(
        priority,
        status.filter((oldValue) => oldValue !== selectedStatus)
      );
    } else {
      setStatus([...status, selectedStatus]);
      filterTasks(priority, [...status, selectedStatus]);
    }
  };

  const handleReset = () => {
    setPriority([]);
    setStatus([]);
    setFilteredTasks(allTasks);
    setIsFiltered(false);
  };

  return (
    <Box>
      <Flex gap="2">
        <Text>Filters:</Text>
        <FilterSelectDropDown
          title="Status"
          options={statusFilter}
          selectedValues={status}
          onChange={handleStatus}
        />

        <FilterSelectDropDown
          title="Priority"
          options={priorities}
          selectedValues={priority}
          onChange={handlePriority}
        />
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
