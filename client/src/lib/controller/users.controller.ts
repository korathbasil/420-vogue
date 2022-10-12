import { HttpError } from "lib/http";
import { Address, User } from "lib/interfaces";
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
    const { data } = await axios.get("/auth", {
      withCredentials: true,
    });
    return data as User;
  }

  static async initGoogleSigninFlow() {
    try {
      const res = await axios.get("/auth/google");
    } catch (error) {}
  }

  // User

  static async getAddresses() {
    try {
      const res = await axios.get<Address[]>("/users/addresses", {
        withCredentials: true,
      });
      return res.data;
    } catch (e: any) {
      throw new HttpError(e.response.data.message, e.response.data.statusCode);
    }
  }

  static async addnewAddress(data: Address) {
    try {
      const res = await axios.post<Address>("/users/addresses", data, {
        withCredentials: true,
      });
      return res.data;
    } catch (e: any) {
      throw new HttpError(e.response.data.message, e.response.data.statusCode);
    }
  }
}
