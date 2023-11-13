'use client'
import { Select, SelectGroup, SelectTrigger } from "@radix-ui/themes";
import React from "react";

const AssigneeSelect = () => {
  return (
    <Select.Root>
      <SelectTrigger placeholder="Assign..." />
      <Select.Content>
        <SelectGroup>
                  <Select.Label>Suggestions</Select.Label>
                  <Select.Item value="SN">Steve Neiman</Select.Item>
        </SelectGroup>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
