"use client";

import React, { useState } from "react";
import { TaskType, priorities } from "../types";
import { Checkbox, Table, DropdownMenu, Button } from "@radix-ui/themes";
import FilterBar from "./FilterBar";
import { useRouter, usePathname } from "next/navigation";
import { deleteTask } from "../actions";
import axios from "axios";

interface Props {
  tasks: TaskType[];
}

const Task = ({ tasks }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);
  console.log(router);
  const [filteredTasks, setFilteredTasks] = useState<TaskType[]>(tasks);

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
    // e.preventDefault();
    try {
      await axios.delete(
        "http://localhost:3000/api/tasks/" + task.id.toString()
      );
      console.log("task deleted");
      console.log(pathName);
      console.log(router);
      router.push("/tasks/");
      router.refresh();
      console.log(pathName);
      console.log(router);
      console.log("refreshed");
      // await deleteTask(task);
    } catch (error) {
      console.log("error");
    }
    // finally {
    //   router.push('./')
    //   router.refresh();
    // }

    // console.log("task deleted");
    // router.refresh();
    // console.log("refreshed");
  };

  // const updateCompleted = () => {};

  return (
    <div>
      <FilterBar
        setFilteredTasks={(newTasks) => setFilteredTasks(newTasks)}
        allTasks={tasks}
      />
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
