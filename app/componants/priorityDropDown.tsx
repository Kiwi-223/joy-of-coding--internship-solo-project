import { Flex, Select, Text } from "@radix-ui/themes";
import React, { ChangeEvent } from "react";

interface Props {
  onChange: (value: string) => void;
  priotities: string[];
}

const PriorityDropDown = ({ onChange, priotities }: Props) => {
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
            {priotities.map((priority: string) => {
              return (
                <Select.Item
                  value={priority}
                  onSelect={() => {
                    handleSelection(priority);
                  }}
                >
                  {priority}
                </Select.Item>
              );
            })}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};

export default PriorityDropDown;
