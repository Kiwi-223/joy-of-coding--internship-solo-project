import { Flex, Select, Text } from "@radix-ui/themes";
import React, { ChangeEvent } from "react";

interface Props {
  onChange: (value: string) => void;
}

const PriorityDropDown = ({ onChange }: Props) => {
  const handleSelection = (selected: string) => {
    onChange(selected);
  };
  return (
    <Flex className="gap-1">
      <Text>Priority:</Text>
      <Select.Root defaultValue="Low">
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Item
              value="Low"
              onSelect={() => {
                handleSelection("Low");
              }}
            >
              Low
            </Select.Item>
            <Select.Item
              value="Medium"
              onSelect={() => {
                handleSelection("Medium");
              }}
            >
              Medium
            </Select.Item>
            <Select.Item
              value="High"
              onSelect={() => {
                handleSelection("High");
              }}
            >
              High
            </Select.Item>
            <Select.Item
              value="Urgent"
              onSelect={() => {
                handleSelection("Urgent");
              }}
            >
              Urgent
            </Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};

export default PriorityDropDown;
