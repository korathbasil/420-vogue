import { axios } from "utils";
import { HttpError } from "lib/http";
import { Manager } from "lib/interfaces";
import { TRUE } from "sass";

export class ManagersController {
  static async getAllManagers(): Promise<Manager[]> {
    try {
      const res = await axios.get("/admin", { withCredentials: true });
      return res.data;
    } catch (e: any) {
      throw new HttpError(e.response.data.message, e.response.data.statusCode);
    }
  }

  static async getManagerById(id: string) {
    const res = await axios.get(`/admin/${id}`, { withCredentials: true });
    return res.data;
  }

  static async getLoggedInManager() {
    try {
      const res = await axios.get("/auth", { withCredentials: true });
      return res.data;
    } catch (e: any) {
      throw new HttpError(e.response.data.message, e.response.data.statusCode);
    }
  }

  static async loginManager(email: string, password: string) {
    try {
      const res = await axios.post(
        "/auth",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

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
      const res = await axios.post(
        "/admin",
        {
          firstname,
          lastname,
          email,
          phone,
          password,
        },
        { withCredentials: true }
      );
      if (res.data) return res.data;
    } catch (e: any) {
      throw new HttpError(e.response.data.message, e.response.data.statusCode);
    }
  }
}