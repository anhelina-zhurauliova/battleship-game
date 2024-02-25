import { Command } from "@/types/Command";

export type Request<Data> = {
  type: Command;
  data: Data;
  id: number;
};
