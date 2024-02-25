import { WebSocket, createWebSocketStream } from "ws";

import { Request } from "@/types/Request";
import { Command } from "@/types/Command";

import { handleUserRegistration } from "./handlers/registration";
import { handleCreateGame } from "./handlers/createGame";

export const wsServerHandler = (ws: WebSocket) => {
  const wsStream = createWebSocketStream(ws, {
    encoding: "utf-8",
    decodeStrings: false,
  });

  wsStream.on("data", async (request: string) => {
    console.log("request", request);
    const requestObject: Request = JSON.parse(request);

    switch (requestObject.type) {
      case Command.Registration:
        handleUserRegistration(ws, requestObject);
        break;

      case Command.CreateRoom:
        handleCreateGame(ws, requestObject);
        break;
    }
  });
};
