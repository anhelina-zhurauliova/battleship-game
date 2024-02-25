import { WebSocket, createWebSocketStream } from "ws";

export const wsServerHandler = (ws: WebSocket) => {
  const wsStream = createWebSocketStream(ws, {
    encoding: "utf-8",
    decodeStrings: false,
  });

  wsStream.on("data", async (request) => {
    const requestObject = JSON.parse(request);

    console.log("message", JSON.parse(request));
  });
};
