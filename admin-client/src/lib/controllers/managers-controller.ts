import { axios } from "utils";
import { HttpError } from "lib/http";
import { Manager } from "lib/interfaces";
import { AxiosError } from "axios";

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
    try {
      const res = await axios.get<Manager>(`/admin/${id}`, {
        withCredentials: true,
      });
      return res.data;
    } catch (e: any) {
      throw new HttpError(e.response.data.message, e.response.data.statusCode);
    }
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

  static async ChangePassword(oldPassword: string, newPassword: string) {
    return axios.put(
      "/admin/password",
      {
        oldPassword,
        newPassword,
      },
      { withCredentials: true }
    );
  }

  static async updateManager(
    id: string,
    obj: {
      firstname?: string;
      lastname?: string;
      email?: string;
      phone?: string;
    }
  ) {
    try {
      const res = await axios.patch<string[]>(`/admin/${id}`, obj, {
        withCredentials: true,
      });
      return res.data;
    } catch (e: any) {
      console.log(e);
      throw new HttpError(e.response.data.message, e.response.data.statusCode);
    }
  }
}
