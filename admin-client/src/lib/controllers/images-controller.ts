import Axios from "axios";
import { axios } from "utils";

export class ImagesController {
  static async getUploadUrls(fileKeys: string[]) {
    const res = await axios.post<{ key: string; url: string }[]>(
      "/images/urls",
      { fileKeys },
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
        withCredentials: true,
      });

      console.log(res.data);
    }
  }
}
