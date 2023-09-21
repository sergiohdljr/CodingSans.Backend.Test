import { userDTO } from "../types/userDTO";

class User {
  private username: string;
  private password: string;

  constructor(user: userDTO) {
    this.username = user.username;
    this.password = user.password;
  }

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  setUsername(username: string) {
    this.username = username;
  }

  setPassword(password: string) {
    this.password = password;
  }
}

export default User;
