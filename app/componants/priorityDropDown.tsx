import { Flex, Select, Text } from "@radix-ui/themes";
import { priorities } from "../types";

interface Props {
  onChange: (value: string) => void;
}

const PriorityDropDown = ({ onChange }: Props) => {
  const handleSelection = (selected: string) => {
    onChange(selected);
  };
  return (
    <Flex className="gap-1">
      <Text>Priority</Text>
      <Select.Root defaultValue="low" onValueChange={handleSelection}>
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
