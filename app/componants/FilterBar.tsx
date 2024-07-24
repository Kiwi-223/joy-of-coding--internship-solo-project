import React, { useState } from "react";
import { Box, Checkbox, Flex } from "@radix-ui/themes";
import PriorityDropDown from "./PriorityDropDown";
import { priorityFilters } from "../types";

const FilterBar = () => {
  // const [filter, setFilter] = "All"

  // const handlePriority = (priorityLevel: string) => {
  //   const filter = priorityLevel

  // }

  return (
    <Box>
      <Flex gap="2">
        <Checkbox />
        Completed
        {/* <PriorityDropDown priotities={priorityFilters} onChange={(priorityLevel) => {
                  handlePriority(priorityLevel);
                }}></PriorityDropDown> */}
      </Flex>
      Priority Title Description DueDate
    </Box>
  );
};

export default FilterBar;
