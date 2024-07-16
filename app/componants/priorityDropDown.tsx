import { Select, Text } from "@radix-ui/themes";
import React from "react";

const PriorityDropDown = () => {
  return (
    <>
      <Text>Priority:</Text>
      <Select.Root defaultValue="Low">
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Item value="Low">Low</Select.Item>
            <Select.Item value="Medium">Medium</Select.Item>
            <Select.Item value="High">High</Select.Item>
            <Select.Item value="Urgent">Urgent</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </>
  );
};

export default PriorityDropDown;
