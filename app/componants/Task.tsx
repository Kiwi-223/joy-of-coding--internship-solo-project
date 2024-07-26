"use client";
import React, { useState } from "react";
import { TaskType } from "../types";
import {
  Box,
  Card,
  Checkbox,
  Flex,
  Heading,
  Table,
  Text,
} from "@radix-ui/themes";
import FilterBar from "./FilterBar";

interface Props {
  tasks: TaskType[];
}

const Task = ({ tasks }: Props) => {
  const [filteredTasks, setFilteredTasks] = useState<TaskType[]>(tasks);
  const [completed, setCompleted] = useState(false);
  // const handleFilteredTasks = (data: TaskType[]) => {
  //   setFilteredTasks(data)
  // }

  return (
    <div>
      <FilterBar
        setFilteredTasks={(newTasks) => setFilteredTasks(newTasks)}
        allTasks={tasks}
      ></FilterBar>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell maxWidth="25px">
              Completed
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell maxWidth="25px">
              Priority
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell maxWidth="56px">
              Task
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell maxWidth="288px">
              Description
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell maxWidth="25px">
              DueDate
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredTasks.map((task: TaskType) => {
            return (
              <Table.Row align="start">
                <Table.Cell maxWidth="25px">Completed</Table.Cell>
                <Table.Cell maxWidth="25px">{task.priority}</Table.Cell>
                <Table.ColumnHeaderCell maxWidth="56px">
                  {task.title}
                </Table.ColumnHeaderCell>
                <Table.Cell maxWidth="288px">{task.description}</Table.Cell>
                <Table.Cell maxWidth="25px">{task.dueDate}</Table.Cell>
                {/* {console.log(task.dueDate.toLocaleDateString)} */}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>

      {/*       
          <>
          
          <Box>
            <Card>
              <Flex gap="8">
                <Checkbox defaultChecked color="green"/>
                <Text className="w-14">{task.priority}</Text>
                <Heading size="3" className="w-40">
                  {task.title}
                </Heading>
                <Text className="w-1">{task.description}</Text>
                <Text>{task.dueDate}</Text>
              </Flex>
            </Card>
          </Box>
          </>
        );
      })} */}
    </div>
  );
};

export default Task;
