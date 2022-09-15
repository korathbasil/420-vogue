import Axios from "axios";
import { axios } from "utils";

export class ImagesController {
  static async getUploadUrls(keysAndTypes: { key: string; type: string }[]) {
    const res = await axios.post<{ key: string; url: string }[]>(
      "/images/urls",
      { keysAndTypes },
      { withCredentials: true }
    );

    return res.data;
  }

  static async uploadImages(imagesWithUrls: { url: string; image: File }[]) {
    for await (const image of imagesWithUrls) {
      const res = await Axios.put(image.url, image.image, {
        headers: {
          "Content-Type": image.image.type,
        },
      });
      console.log(res.data);
    }
  }
}
