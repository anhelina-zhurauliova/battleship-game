import { User } from "./User";

export type AddUserToRoomReqData = {
  indexRoom: number;
};

export type UpdateRoomReqData = {
  roomId: number;
  roomUsers: Array<User>;
};
