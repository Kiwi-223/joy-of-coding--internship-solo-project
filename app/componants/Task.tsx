import React from "react";
import { TaskType } from "../types";
import { Box, Card, Checkbox, Flex, Heading, Text } from "@radix-ui/themes";

interface Props {
  tasks: TaskType[];
}

const Task = ({ tasks }: Props) => {
  return (
    <div>
      {tasks.map((task: TaskType) => {
        return (
          <Box>
            <Card>
              <Flex gap="8">
                <Checkbox color="green" />
                <Text className="w-14">{task.priority}</Text>
                <Heading size="3" className="w-40">
                  {task.title}
                </Heading>
                <Text className="w-72">{task.description}</Text>
                <Text>{task.dueDate}</Text>
              </Flex>
            </Card>
          </Box>
        );
      })}
    </div>
  );
};

export default Task;
