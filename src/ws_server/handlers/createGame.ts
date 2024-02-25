import { WebSocket } from "ws";

import { Command } from "@/types/Command";
import { Request } from "@/types/Request";
import { generateId } from "@/utils/generateId";
import { currentUserId } from "@/database/users";

export const handleCreateGame = (ws: WebSocket, request: Request) => {
  const responseData = {
    idGame: generateId(),
    idPlayer: currentUserId,
  };

  const wsResponse = JSON.stringify({
    type: Command.CreateGame,
    data: JSON.stringify(responseData),
    id: request.id,
  });

  ws.send(wsResponse);
};
