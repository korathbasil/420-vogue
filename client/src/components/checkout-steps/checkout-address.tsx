import { useQuery } from "@tanstack/react-query";
import { UsersController } from "lib/controller";
import { Dispatch, SetStateAction, useState, FC, useEffect } from "react";

import styles from "./checkout-steps.module.scss";

interface CheckoutAddressProps {
  updateStep: Dispatch<SetStateAction<number>>;
}

export const CheckoutAddress: FC<CheckoutAddressProps> = ({ updateStep }) => {
  const [addAddress, setAddAddress] = useState(false);

  function addAddressSwitcher() {
    setAddAddress(!addAddress);
  }

  const { data: addresses = [] } = useQuery(["addresses"], async () => {
    try {
      const addresses = await UsersController.getAddresses();
      return addresses;
    } catch (error) {}
  });

  useEffect(() => {
    if (addresses.length < 1) {
      setAddAddress(true);
    }
  }, [addresses]);

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
            {addresses.map((ad) => {
              return (
                <label className={styles.addressRadio} htmlFor={ad._id}>
                  <input type="radio" name="address" id={ad._id} />
                  <div>
                    <h5>{ad.name}</h5>
                    <p>{ad.line1}</p>
                    <p>{ad.line2}</p>
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
          </form>
        )}
        <div className={styles.actions}>
          {/* <button }>Next</button> */}
          {addresses.length > 0 && <button>Add new address</button>}
        </div>
        {addAddress && (
          <form className={styles.newAddress}>
            <label htmlFor="line1">Line 1</label>
            <input type="text" id="line1" name="line1" />
            <label htmlFor="line2">Line 2</label>
            <input type="text" id="line2" name="line2" />
            <label htmlFor="line3">Line 3</label>
            <input type="text" id="line3" name="line3" />
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" />
            <div>
              <div>
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" />
              </div>

              <div>
                <label htmlFor="pin">PIN</label>
                <input type="text" id="pin" name="pin" />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" />
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
              <input type="checkbox" name="save" id="save" />
              <label htmlFor="save">Save this address</label>
            </div>
            <label htmlFor="name">Name for this address</label>
            <input type="text" id="name" name="name" />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                updateStep(3);
              }}
            >
              Next
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
