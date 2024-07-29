import {
  Button,
  Box,
  Flex,
  Popover,
  Text,
  Checkbox
} from "@radix-ui/themes";
import React, { useState } from "react";

interface Props {
  title: string;
  options: {
    label: string;
    value: string, ;
  }[];
  onChange: (selectedValues: string[]) => void;
}

const FilterSelectDropDown = ({ options, title }: Props) => {
  const [selectedValues, setSelectedValues] = useState<Set<string>>(new Set());

  const handleCheckboxChange = (value: string) => {
    setSelectedValues(prevSelectedValues => {
      const newSelectedValues = new Set(prevSelectedValues);
      if (newSelectedValues.has(value)) {
        newSelectedValues.delete(value);
      } else {
        newSelectedValues.add(value);
      }
      return newSelectedValues;
    });
  };

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="outline" size="1" className="h-8 border-dashed">
          {title}
        </Button>
      </Popover.Trigger>

      <Popover.Content width="360px">
        <Flex gap="3">
          <Box flexGrow="1">
              {options.map((option) => {
                return (
                  <Flex gap={"2"}>
                    <Checkbox
                    key={option.value}
                    checked={selectedValues.has(option.value)}
                    onCheckedChange={() => handleCheckboxChange(option.value)}
                    aria-checked={selectedValues.has(option.value)}
                    />
                    <Text>{option.label}</Text>
                  </ Flex>
                );
              })}

          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};

export default FilterSelectDropDown;
