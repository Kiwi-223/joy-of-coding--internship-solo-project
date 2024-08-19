import { Flex, Select, Text } from "@radix-ui/themes";
import { priorities } from "../types";
import { Priority } from "@prisma/client";

interface Props {
  onChange: (value: Priority) => void;
  currentPriority?: string;
}

const PriorityDropDown = ({ onChange, currentPriority = "low" }: Props) => {
  const handleSelection = (selected: Priority) => {
    onChange(selected);
  };

  return (
    <Flex className="gap-1" align="center">
      <Text>Priority:</Text>
      <Select.Root
        defaultValue={currentPriority}
        onValueChange={handleSelection}
      >
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            {priorities.map((item) => {
              return (
                <Select.Item
                  key={item.value}
                  value={item.value}
                  onSelect={() => {}}
                >
                  {item.label}
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
