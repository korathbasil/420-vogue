import { AxiosError } from "axios";
import { unlink } from "fs";
import { axios } from "utils";

export class UsersController {
  static async signupUser(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) {
    axios
      .post("/users", {
        firstname,
        lastname,
        email,
        password,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((e) => console.error(e.response));
  }

  static async loginUser(email: string, password: string) {
    try {
      const result = await axios.post("/auth/login", {
        email,
        password,
      });

      console.log("REs");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
