"use client";
import React, { useState } from "react";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import { statusFilter, priorities, TaskType } from "../types";
import { LuX } from "react-icons/lu";
import FilterSelectDropDown from "./FilterSelectDropDown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from "react-datepicker/dist/date_utils";

interface Props {
  allTasks: TaskType[];
  setFilteredTasks: (tasks: TaskType[]) => void;
}

const FilterBar = ({ allTasks, setFilteredTasks }: Props) => {
  const [filteredPriority, setFilteredPriority] = useState<string[]>([]);
  const [filteredStatus, setFilteredStatus] = useState<boolean[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const dateFilter = (update) => {
    console.log(update);
    setDateRange(update);
  };

  const filterTasks = (
    selectedPriority: string[],
    selectedStatus: boolean[]
  ) => {
    let filteredTasks = allTasks;

    if (selectedPriority.length > 0) {
      filteredTasks = allTasks.filter((task) => {
        console.log(selectedPriority.includes(task.priority));
        return selectedPriority.includes(task.priority);
      });
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
    if (filteredPriority.includes(selectedPriority)) {
      setFilteredPriority(
        filteredPriority.filter((oldValue) => oldValue !== selectedPriority)
      );
      filterTasks(
        filteredPriority.filter((oldValue) => oldValue !== selectedPriority),
        filteredStatus
      );
    } else {
      setFilteredPriority([...filteredPriority, selectedPriority]);
      filterTasks([...filteredPriority, selectedPriority], filteredStatus);
    }
  };

  const handleStatus = (selectedStatus: boolean) => {
    if (filteredStatus.includes(selectedStatus)) {
      setFilteredStatus(
        filteredStatus.filter((oldValue) => oldValue !== selectedStatus)
      );
      filterTasks(
        filteredPriority,
        filteredStatus.filter((oldValue) => oldValue !== selectedStatus)
      );
    } else {
      setFilteredStatus([...filteredStatus, selectedStatus]);
      filterTasks(filteredPriority, [...filteredStatus, selectedStatus]);
    }
  };

  const handleReset = () => {
    setFilteredPriority([]);
    setFilteredStatus([]);
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
          selectedValues={filteredStatus}
          onChange={handleStatus}
        />
        <FilterSelectDropDown
          title="Priority"
          options={priorities}
          selectedValues={filteredPriority}
          onChange={handlePriority}
        />
        DueDate:
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            dateFilter(update);
          }}
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
