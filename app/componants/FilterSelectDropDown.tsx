import { Button, Box, Flex, Popover, Text, Checkbox } from "@radix-ui/themes";
import React, { useState } from "react";

interface Props {
  title: string;
  options: {
    label: string;
    value: string | boolean;
  }[];
  onChange: (selectedValues: any[]) => void;
}

const FilterSelectDropDown = ({ options, title, onChange }: Props) => {
  const [selectedValues, setSelectedValues] = useState<(string | boolean)[]>([]);

  const handleCheckboxChange = (value: string | boolean) => {
    console.log(value)
    setSelectedValues([value])
    onChange(selectedValues);
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
                <Flex key={option.value.toString()} gap={"2"}>
                  <Checkbox
                    onCheckedChange={() => handleCheckboxChange(option.value)}
                    aria-checked={selectedValues?.includes(option.value)}
                  />
                  <Text>{option.label}</Text>
                </Flex>
              );
            })}
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};

export default FilterSelectDropDown;
