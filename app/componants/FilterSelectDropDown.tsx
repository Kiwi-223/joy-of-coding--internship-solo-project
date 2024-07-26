import { Badge, Button, Box, Flex, Popover, TextArea, Text, Checkbox } from '@radix-ui/themes'
import React from 'react'

interface Props {
    title: string;
    options: string[];
}


const FilterSelectDropDown = () => {
  return (


<Popover.Root>
  <Popover.Trigger>
    <Button variant='outline' size="1" className="h-8 border-dashed">
    OptionsTitle
    </Button>
  </Popover.Trigger>
  <Popover.Content width="360px">
    <Flex gap="3">
      <Box flexGrow="1">
        <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
        <Flex gap="3" mt="3" justify="between">
          <Flex align="center" gap="2" asChild>
            <Text as="label" size="2">
              <Checkbox />
              <Text>Send to group</Text>
            </Text>
          </Flex>

          <Popover.Close>
            <Button size="1">Comment</Button>
          </Popover.Close>
        </Flex>
      </Box>
    </Flex>
  </Popover.Content>
</Popover.Root>
  )
}

export default FilterSelectDropDown