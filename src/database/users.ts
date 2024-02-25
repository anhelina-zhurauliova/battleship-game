import { UserDB } from "@/types/User";

import { generateId } from "@/utils/generateId";

export const users: Record<string, UserDB> = {};

export let currentUserId: string;

export const addUserToDB = (name: string, password: string) => {
  const id = generateId();

  users[id] = { name, password, index: id };

  return id;
};

export const findUserByName = (name: string): UserDB | undefined => {
  const userValues = Object.values(users);

  return userValues.find((user) => user.name === name);
};

export const setCurrentUserId = (id) => {
  currentUserId = id;
};
