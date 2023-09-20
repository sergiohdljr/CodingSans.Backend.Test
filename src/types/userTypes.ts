export type userType = {
  id: string;
  username: string;
  password: string;
};

export type userTypePayload = Pick<userType, "username" | "password">;
