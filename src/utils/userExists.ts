import userRepository from "../dataAccess/userRepository";

export const userExists = async (id: string): Promise<boolean> => {
  const user = await userRepository.findUser(id);
  return user ? true : false;
};
