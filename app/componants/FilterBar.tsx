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
    console.log(selectedPriority);
    console.log(selectedStatus)
    let filteredTasks = allTasks;

    if (selectedPriority.length > 0) {
      filteredTasks = filteredTasks.filter((task) =>
        selectedPriority.includes(task.priority)
      );
    }

    if (selectedStatus.length > 0) {
      filteredTasks = filteredTasks.filter((task) =>
        selectedStatus.includes(task.completed)
      );
    }

    setFilteredTasks(filteredTasks);
    setIsFiltered(selectedPriority.length > 0 || selectedStatus.length > 0);
  };

  const handlePriority = (selectedPriority: string) => {
    setPriority([...priority, selectedPriority]);
    filterTasks([...priority, selectedPriority], status);
  };

  const handleStatus = (selectedStatus: boolean) => {
    setStatus([...status, selectedStatus]);
    filterTasks(priority, [...status, selectedStatus]);
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



// const handleCheckboxChange = (value: string | boolean) => {
//   onChange(value)
  // if (selectedValues?.includes(value)) {
  //   setSelectedValues(
  //     selectedValues.filter((oldValue) => oldValue !== value)
  //   );
  //   onChange(selectedValues.filter((oldValue) => oldValue !== value));
  // } else {
  //   setSelectedValues([...selectedValues, value]);
  //   onChange([...selectedValues, value]);
  // }
// };