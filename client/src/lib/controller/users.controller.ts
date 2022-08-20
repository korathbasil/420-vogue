import { axios } from "utils";

export class UsersController {
  static async SignupUser(
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
}
