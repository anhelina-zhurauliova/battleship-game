import { WebSocket } from "ws";

import { RegistrationReqData, RegistrationResData } from "@/types/Registration";
import {
  addUserToDB,
  findUserByName,
  setCurrentUserId,
} from "@/database/users";
import { Request } from "@/types/Request";

export const handleUserRegistration = (ws: WebSocket, request: Request) => {
  const { name, password }: RegistrationReqData = JSON.parse(request.data);

  const existedUser = findUserByName(name);

  const responseData: RegistrationResData = {
    name,
    index: existedUser?.index,
  };

  if (existedUser) {
    if (password !== existedUser.password) {
      responseData.error = true;
      responseData.errorText =
        "The password you entered is incorrect. Please try again.";
    } else {
      setCurrentUserId(existedUser.index);
    }
  }

  if (!existedUser) {
    const createdUserId = addUserToDB(name, password);

    setCurrentUserId(createdUserId);

    responseData.index = createdUserId;
  }

  const wsResponse = JSON.stringify({
    type: request.type,
    data: JSON.stringify(responseData),
    id: request.id,
  });

  ws.send(wsResponse);
};
