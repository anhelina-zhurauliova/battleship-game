import { User } from "./User";

export type RegistrationReqData = {
  name: string;
  password: string;
};

export type RegistrationResData = Omit<User, "password"> & {
  error?: boolean;
  errorText?: string;
};
