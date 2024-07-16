'use client'

import PriorityDropDown from "@/app/componants/priorityDropDown";
import { Box, Card, Flex, Grid,Text, Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const newTask = () => {
  return (
    <Box maxWidth={"800px"} className="justify-center" >
      <Card size="2">
    <Flex direction="column" gap="3">
      <Grid gap="1">
        <Text as="div" weight="bold" size="2" mb="1">
          New Task
        </Text>
        <Flex className="gap-2">
        <TextField.Root placeholder="Title"></TextField.Root>
        
        <PriorityDropDown />
        </Flex>
        <TextArea placeholder="Description" />
      </Grid>
      <Grid columns="2" gap="2">
        <Button variant="surface">Cancel</Button>
        <Button>Save</Button>
      </Grid>
    </Flex>
  </Card>
      5
    </Box>
  );
};

export default newTask;

 