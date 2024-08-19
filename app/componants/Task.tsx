"use client";

import React, { useState } from "react";
import { TaskType, priorities } from "../types";
import { Checkbox, Table, DropdownMenu, Button } from "@radix-ui/themes";
import FilterBar from "./FilterBar";

interface Props {
  tasks: TaskType[];
}

const Task = ({ tasks }: Props) => {
  const [filteredTasks, setFilteredTasks] = useState<TaskType[]>(tasks);

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div>
      <FilterBar
        setFilteredTasks={(newTasks) => setFilteredTasks(newTasks)}
        allTasks={tasks}
      />
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell maxWidth="30px">
              Completed
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell maxWidth="25px">
              Priority
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell maxWidth="56px">
              Task
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell maxWidth="200px">
              Description
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell minWidth="25px" maxWidth="50px">
              DueDate
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredTasks.map((task: TaskType) => {
            return (
              <Table.Row align="start" key={task.id}>
                <Table.Cell maxWidth="25px">
                  <Checkbox checked={task.completed} aria-readonly />
                </Table.Cell>
                {priorities.map((priority) => {
                  if (task.priority === priority.value)
                    return (
                      <Table.Cell maxWidth="25px">{priority.label}</Table.Cell>
                    );
                })}

                <Table.ColumnHeaderCell maxWidth="56px">
                  {task.title}
                </Table.ColumnHeaderCell>
                <Table.Cell maxWidth="288px">{task.description}</Table.Cell>
                <Table.Cell minWidth="25px" maxWidth="30px">
                  {formatDate(task.dueDate)}
                </Table.Cell>
                <Table.Cell>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button variant="soft">...</Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item>Edit</DropdownMenu.Item>
                      <DropdownMenu.Item color="red">Delete</DropdownMenu.Item>
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
