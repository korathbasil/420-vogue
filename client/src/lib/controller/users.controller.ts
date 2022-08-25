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
      const result = await axios.post(
        "/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  static async getCurrentUser() {
    try {
      const { data } = await axios.get("/auth/current-user", {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}
