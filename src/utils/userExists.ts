import userRepository from "../dataAccess/userRepository";

export const userExists = async (username: string): Promise<boolean> => {
  const user = await userRepository.findUser(username);
  return user ? true : false;
};
