import { Dispatch, SetStateAction, useState, FC, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UsersController } from "lib/controller";

import styles from "./checkout-steps.module.scss";
import { Address } from "lib/interfaces";
import { equal } from "assert";

interface CheckoutAddressProps {
  updateStep: Dispatch<SetStateAction<number>>;
}

export const CheckoutAddress: FC<CheckoutAddressProps> = ({ updateStep }) => {
  const [addAddress, setAddAddress] = useState(false);
  const [saveAddress, setSaveAddress] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState("");

  function addAddressSwitcher() {
    if (addAddress) {
      setAddAddress(false);
    } else {
      setSelectedAddressId("");
      setAddAddress(true);
    }
  }

  const validationSchema2 = Yup.object({
    name: Yup.string().required(),
    phone: Yup.string().required(),
  });

  const formik2 = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    onSubmit: selectAddressAndSubmit,
  });

  function selectAddressAndSubmit() {}

  const validationSchema1 = Yup.object({
    line1: Yup.string().required(),
    line2: Yup.string().required(),
    line3: Yup.string().required(),
    city: Yup.string().required(),
    pin: Yup.string().required(),
    state: Yup.string().required(),
    name: Yup.string(),
  });

  const formik = useFormik({
    validationSchema: validationSchema1,
    initialValues: {
      line1: "",
      line2: "",
      line3: "",
      city: "",
      pin: "",
      state: "",
      name: "",
    },
    onSubmit: saveNewAddress,
  });

  const { data: addresses = [] } = useQuery(["addresses"], async () => {
    try {
      const addresses = await UsersController.getAddresses();
      return addresses;
    } catch (error) {}
  });

  useEffect(() => {
    console.log(addresses.length);
    if (addresses.length < 1) {
      setAddAddress(true);
    } else {
      setAddAddress(false);
    }
  }, [addresses]);

  async function handleNext() {
    if (selectedAddressId) {
      // Create address and contact in order state

      return;
    }
    if (!saveAddress) {
      // Create address and contact in order state

      return;
    }
    formik.submitForm();
  }

  async function saveNewAddress() {
    try {
      const newAddress = {
        line1: formik.values.line1,
        line2: formik.values.line2,
        line3: formik.values.line3,
        city: formik.values.city,
        pin: formik.values.pin,
        state: formik.values.state,
        name: formik.values.name,
      } as Address;

      await UsersController.addnewAddress(newAddress);
    } catch (error) {}
  }

  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <div>
          <h3>2</h3>
        </div>
        <h3>DELIVERY ADDRESS</h3>
      </div>
      <div className={styles.body}>
        {addresses.length > 0 && <p>Select an address.</p>}
        {addresses.length > 0 && (
          <form className={styles.form}>
            <div className={styles.radios}>
              {addresses.map((ad) => {
                console.log(ad);
                return (
                  <label className={styles.addressRadio} htmlFor={ad._id}>
                    <input
                      type="radio"
                      name="address"
                      id={ad._id}
                      value={ad._id}
                      onChange={(e) => {
                        setAddAddress(false);
                        setSelectedAddressId(e.target.value);
                      }}
                      checked={!!selectedAddressId}
                    />
                    <div>
                      <h5>{ad.name}</h5>
                      <p>{ad.line1}</p>
                      <p>{ad.line2}</p>
                      <p>{ad.line3}</p>
                      <p>
                        {ad.city}, {ad.pin}
                      </p>
                      <p>
                        {ad.state}, {ad.country}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>

            {selectedAddressId && (
              <div className={styles.details}>
                <label htmlFor="name">Contact Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik2.values.name}
                  onChange={formik2.handleChange}
                  onBlur={formik2.handleBlur}
                />
                <label htmlFor="phone">Contact Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formik2.values.phone}
                  onChange={formik2.handleChange}
                  onBlur={formik2.handleBlur}
                />
              </div>
            )}
          </form>
        )}
        <div className={styles.actions}>
          {/* <button }>Next</button> */}
          {addresses.length > 0 && (
            <button onClick={addAddressSwitcher} disabled={addAddress}>
              Add New Address{" "}
            </button>
          )}
        </div>
        {addAddress && (
          <form className={styles.newAddress}>
            <label htmlFor="line1">Line 1</label>
            <input
              type="text"
              id="line1"
              name="line1"
              value={formik.values.line1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="line2">Line 2</label>
            <input
              type="text"
              id="line2"
              name="line2"
              value={formik.values.line2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="line3">Line 3</label>
            <input
              type="text"
              id="line3"
              name="line3"
              value={formik.values.line3}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div>
              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div>
                <label htmlFor="pin">PIN</label>
                <input
                  type="text"
                  id="pin"
                  name="pin"
                  value={formik.values.pin}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value="INDIA (IN)"
                  disabled
                />
              </div>
            </div>
            <div className={styles.save}>
              <input
                type="checkbox"
                name="save"
                id="save"
                checked={saveAddress}
                onChange={(e) => setSaveAddress(e.target.checked)}
              />
              <label htmlFor="save">Save this address</label>
            </div>
            <label htmlFor="name">Name for this address</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </form>
        )}
        <button type="submit" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};
