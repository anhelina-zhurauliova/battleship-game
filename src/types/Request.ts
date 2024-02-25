import { Command } from "@/types/Command";

export type Request = {
  type: Command;
  data: string;
  id: number;
};
