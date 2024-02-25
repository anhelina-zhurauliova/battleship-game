import { Position } from "./Ships";

export enum AttackStatus {
  Miss = "miss",
  Killed = "killed",
  Shot = "shot",
}

export type AttackReqData = Position & {
  gameId: number;
  indexPlayer: number; // id of the player in the current game session
};

export type AttackResData = Position & {
  currentPlayer: number; // id of the player in the current game session
  status: AttackStatus;
};

export type RandomAttackReqData = {
  gameId: number;
  indexPlayer: number; // id of the player in the current game session
};
