import { useState, useRef } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import { ImagesController } from "lib/controllers";

import styles from "./add-product-variant-form.module.scss";
import { InputField } from "components/controls";
import { AddImage, Delete } from "assets/icons";

export const AddProductVariantForm = () => {
  const [images, setImages] = useState<{ file: File; key: string }[]>([]);
  const imagePickerRef = useRef<HTMLInputElement>(null);

  const formik = useFormik({
    initialValues: {
      color: "",
      colorCode: "",
      price: "",
    },
    onSubmit: formSubmitHandler,
    validationSchema: yup.object({
      color: yup
        .string()
        .min(3, "Color should be atleast 3 characters")
        .max(15, "Color can't be more than 15 characters"),
      colorCode: yup.string().length(6, "Color code should be 6 characters"),
      price: yup.number().min(10, "Price should be more than 10"),
    }),
  });

  async function formSubmitHandler() {
    const keys = images.map((img) => img.key);
    try {
      const urls = await ImagesController.getUploadUrls(keys);

      if (urls.length !== images.length) return;

      const imagesWithUrls = images.map((img) => {
        const selectedUrl = urls.find((url) => url.key === img.key);
        if (!selectedUrl) throw new Error("Images mismatch");
        return {
          url: selectedUrl.url,
          image: img.file,
        };
      });

      await ImagesController.uploadImages(imagesWithUrls);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form className={styles.parent} onSubmit={formik.handleSubmit}>
      <h4>Please fill the variant details.</h4>
      <div className="flex">
        <div className="flex-1">
          <InputField
            type="text"
            label="Color"
            name="color"
            onChange={formik.handleChange}
            value={formik.values.color}
            required={true}
          />
        </div>
        <div className="flex-1">
          <InputField
            type="text"
            label="Color Code"
            name="colorCode"
            onChange={formik.handleChange}
            value={formik.values.colorCode}
            required={true}
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex-05" style={{ marginRight: "20px" }}>
          <InputField
            type="text"
            label="Price"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
            required={true}
          />
        </div>
      </div>
      <div className={styles.imagesContainer}>
        <h4>Images</h4>
        <div className={styles.images}>
          {images.map((image) => {
            return (
              <div key={image.key} className={styles.imageHolder}>
                <Image
                  src={URL.createObjectURL(image.file)}
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <div
                  onClick={(e) => {
                    const remainingImages = images.filter(
                      (img) => img.key !== image.key
                    );
                    setImages(remainingImages);
                  }}
                >
                  <Delete fill="red" size="20px" />
                </div>
              </div>
            );
          })}
          {images.length < 6 && (
            <div
              onClick={() => {
                if (images.length < 6) {
                  imagePickerRef.current!.click();
                }
              }}
              className={styles.addImage}
            >
              <AddImage size="50px" fill="grey" />
            </div>
          )}
        </div>
      </div>
      <input
        type="file"
        id="image-picker"
        ref={imagePickerRef}
        onChange={(e) => {
          if (e.target.files && e.target.files[0] && images.length < 6) {
            setImages([
              ...images,
              { file: e.target.files[0], key: new Date().toISOString() },
            ]);
          }
        }}
        hidden
      />
      <button className="primary-button" type="submit">
        Add
      </button>
    </form>
  );
};
