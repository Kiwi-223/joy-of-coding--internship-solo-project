"use client";

import React, { useMemo, useState } from "react";
import { TaskType, priorities, statusFilter } from "../types";
import {
  Checkbox,
  Table,
  DropdownMenu,
  Button,
  Box,
  Flex,
  Text,
} from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { deleteTask } from "../actions";
import { LuX } from "react-icons/lu";
import FilterSelectDropDown from "./FilterSelectDropDown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { revalidatePath } from "next/cache";

interface Props {
  tasks: TaskType[];
}

const Task = ({ tasks }: Props) => {
  const router = useRouter();
  const [filteredPriority, setFilteredPriority] = useState<string[]>([]);
  const [filteredStatus, setFilteredStatus] = useState<boolean[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  const handleDelete = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    task: TaskType
  ) => {
    try {
      await deleteTask(task);
      revalidatePath('/tasks/')
      // router.refresh();
    } catch (error) {}
  };

  // const dateFilter = (update) => {
  //   setDateRange(update);
  // };
 
  const filterTasks = (
    selectedPriority: string[],
    selectedStatus: boolean[]
  ) => {
    let tempFilteredTasks = tasks;

    if (selectedPriority.length > 0) {
      tempFilteredTasks = tasks.filter((task) => {
        return selectedPriority.includes(task.priority);
      });
    }

    if (selectedStatus.length > 0) {
      tempFilteredTasks = tempFilteredTasks.filter((task) =>
        selectedStatus.includes(task.completed)
      );
    }

    setIsFiltered(selectedPriority.length > 0 || selectedStatus.length > 0);
    return tempFilteredTasks;
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

  const filteredTasks = useMemo(
    () => filterTasks(filteredPriority, filteredStatus),
    [tasks, filteredPriority, filteredStatus]
  );

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
    setIsFiltered(false);
  };

  // const updateCompleted = () => {};

  return (
    <div>
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
              setDateRange(update);
            }}
          />
          {isFiltered && (
            <Button variant="ghost" onClick={handleReset}>
              Clear Filters <LuX className="ml-2 h-4 w-4" />
            </Button>
          )}
        </Flex>
      </Box>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell width={"100px"}>
              Completed
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell width={"100px"}>
              Priority
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell minWidth="100px" maxWidth={"300px"}>
              Task
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell minWidth="300px">
              Description
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell width={"100px"}>
              DueDate
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell width={"50px"} />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filteredTasks.map((task: TaskType) => {
            return (
              <Table.Row align="start" key={task.id}>
                <Table.Cell>
                  <Checkbox
                    color="green"
                    checked={task.completed}
                    aria-readonly
                  />
                </Table.Cell>
                {priorities.map((priority) => {
                  if (task.priority === priority.value)
                    return (
                      <Table.Cell key={priority.value}>
                        {priority.label}
                      </Table.Cell>
                    );
                })}

                <Table.ColumnHeaderCell>{task.title}</Table.ColumnHeaderCell>
                <Table.Cell>{task.description}</Table.Cell>
                <Table.Cell>{formatDate(task.dueDate)}</Table.Cell>
                <Table.Cell>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button variant="soft">...</Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item
                        onClick={() => router.push("/tasks/" + task.id)}
                      >
                        Edit
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        color="red"
                        onClick={(e) => handleDelete(e, task)}
                      >
                        Delete
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default Task;
