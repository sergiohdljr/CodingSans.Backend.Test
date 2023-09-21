import { userType } from "./userTypes";

export type userDTO = Pick<userType, "password" | "username">;
