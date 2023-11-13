"use client";
import { User } from "@prisma/client";
import { Select, SelectGroup, SelectTrigger } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AssigneeSelect = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get<User[]>("/api/users");
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <Select.Root>
      <SelectTrigger placeholder="Assign..." />
      <Select.Content>
        <SelectGroup>
          <Select.Label>Suggestions</Select.Label>
          {users.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {" "}
              {user.name}{" "}
            </Select.Item>
          ))}
        </SelectGroup>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
