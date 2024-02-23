import { WebSocketServer } from "ws";

import { httpServer } from "@/http_server/index";
import { wsServerHandler } from "@/ws_server/index";
import { WS_PORT, HTTP_PORT } from "@/constants/configuration";

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const ws = new WebSocketServer({
  port: WS_PORT,
});

ws.on("connection", wsServerHandler);

// const handleExit = () => {
//   httpServer.close(() => {
//     process.stdout.write(
//       `Static http server on the ${HTTP_PORT} port was closed \n`
//     );
//   });

//   ws.close(() => {
//     process.stdout.write(`Web socket on the port ${WS_PORT} was closed \n`);
//   });
// };

// process.on("exit", handleExit);
// process.on("SIGINT", handleExit);
