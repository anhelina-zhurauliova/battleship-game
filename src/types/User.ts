export type User = {
  name: string;
  index: number;
};

export type UserDB = User & { password: string };
