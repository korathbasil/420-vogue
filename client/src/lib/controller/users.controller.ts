import { User } from "lib/interfaces";
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
    const { data } = await axios.post(
      "/auth/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    return data;
  }

  static async getCurrentUser() {
    const { data } = await axios.get("/auth/current-user", {
      withCredentials: true,
    });
    return data as User;
  }

  static async initGoogleSigninFlow() {
    try {
      const res = await axios.get("/auth/google", {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:8000",
        },
      });

      console.log(res);
    } catch (error) {}
  }
}
