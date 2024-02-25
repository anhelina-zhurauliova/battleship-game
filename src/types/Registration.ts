import { User } from "./User";

export type RegistrationReqData = {
  name: string;
  password: string;
};

export type RegistrationResData = User & {
  error: boolean;
  errorText: string;
};
