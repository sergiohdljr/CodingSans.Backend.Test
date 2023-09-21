import bcrypt from "bcrypt";

export const compareHashPassword = async (
  password: string,
  userPassword: string,
) => {
  const validPassword = await bcrypt.compare(password, userPassword);
  return validPassword;
};
