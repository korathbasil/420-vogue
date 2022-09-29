import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import { ImagesController, VaraintsController } from "lib/controllers";

import styles from "./add-product-variant-form.module.scss";
import { InputField } from "components/controls";
import { AddImage, Delete } from "assets/icons";
import { Nanoid } from "utils";

const IMAGE_LIMIT_PER_VARIANT = 6;

export const AddProductVariantForm = () => {
  const [images, setImages] = useState<{ file: File; key: string }[]>([]);
  const imagePickerRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { id: productId } = router.query;

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
    if (Array.isArray(productId) || productId === undefined) return;
    const keysAndTypes = images.map((img) => {
      return {
        key: img.key,
        type: img.file.type,
      };
    });
    try {
      const urls = await ImagesController.getUploadUrls(keysAndTypes);

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

      const imageKeys = images.map(
        (img) =>
          "https://s3.ap-south-1.amazonaws.com/static.420vogue.in/" + img.key
      );
      await VaraintsController.createVariant(
        productId,
        formik.values.color,
        formik.values.colorCode,
        imageKeys,
        parseFloat(formik.values.price)
      );

      router.push("/products/" + productId);
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
                if (images.length < IMAGE_LIMIT_PER_VARIANT) {
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
          if (
            e.target.files &&
            e.target.files[0] &&
            images.length < IMAGE_LIMIT_PER_VARIANT
          ) {
            const imgFile = e.target.files[0];
            const ext =
              imgFile.name.split(".")[imgFile.name.split(".").length - 1];

            setImages([
              ...images,
              {
                file: e.target.files[0],
                key: `${productId}/${Nanoid.new()}.${ext}`,
              },
            ]);
          }
        }}
        hidden
      />
      <button className="primary-button" type="submit">
        Add Product Variant
      </button>
    </form>
  );
};
