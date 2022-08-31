import { axios } from "utils";
import { HttpError } from "lib/http";
import { Manager } from "lib/interfaces";

export class ManagersController {
  static async getAllManagers(): Promise<Manager[]> {
    try {
      const res = await axios.get("/admin");
      return res.data;
    } catch (e: any) {
      throw new HttpError(e.response.data.message, e.response.data.statusCode);
    }
  }

  static async createManager(
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    password: string
  ) {
    try {
      const res = await axios.post("/admin", {
        firstname,
        lastname,
        email,
        phone,
        password,
      });
      if (res.data) return res.data;
    } catch (e: any) {
      throw new HttpError(e.response.data.message, e.response.data.statusCode);
    }
  }
}
