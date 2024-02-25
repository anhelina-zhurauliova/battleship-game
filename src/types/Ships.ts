export enum ShipType {
  S = "small",
  M = "medium",
  L = "large",
  XL = "huge",
}

export type Position = {
  x: number;
  y: number;
};

export type Ship = {
  position: Position;
  direction: boolean;
  length: number;
  type: ShipType;
};

export type AddShipsData = {
  gameId: number;
  ships: Array<Ship>;
  indexPlayer: number; // id of the player in the current game session
};
