import { Ship } from "./Ships";

export type CreateGameResData = {
  idGame: number;
  idPlayer: number; // id for player in the game session, who have sent add_user_to_room request, not enemy
};

export type UpdateResWinnersData = {
  name: string;
  wins: number;
};

export type StartGameResData = {
  ships: Array<Ship>;
  currentPlayerIndex: number; // id of the player in the current game session, who have sent his ships
};

export type RandomAttackReqData = {
  gameId: number;
  indexPlayer: number; // id of the player in the current game session
};

export type TurnResData = {
  currentPlayer: number; // id of the player in the current game session
};

export type FinishResData = {
  winPlayer: number; // id of the player in the current game session
};
