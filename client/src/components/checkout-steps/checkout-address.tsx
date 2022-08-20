import styles from "./checkout-steps.module.scss";

export const CheckoutAddress = () => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <div>
          <h3>2</h3>
        </div>
        <h3>DELIVERY ADDRESS</h3>
      </div>
      <div className={styles.body}>
        <p>Select an address.</p>
        <form className={styles.form}>
          <div className={styles.addressRadio}>
            <input type="radio" name="address" id="address1" />
            <label htmlFor="address1">
              <h5>HOME</h5>
              <p>#322/1, Alberto Road</p>
              <p>Albenia Center</p>
              <p>2nd st. Gandhi Nagar</p>
              <p>9876543210</p>
              <p>Calicut, 678564</p>
              <p>Kerala, India</p>
            </label>
          </div>
          <div className={styles.addressRadio}>
            <input type="radio" name="address" id="address2" />
            <label htmlFor="address2">
              <h5>HOME</h5>
              <p>#322/1, Alberto Road</p>
              <p>Albenia Center</p>
              <p>2nd st. Gandhi Nagar</p>
              <p>9876543210</p>
              <p>Calicut, 678564</p>
              <p>Kerala, India</p>
            </label>
          </div>
          <div className={styles.addressRadio}>
            <input type="radio" name="address" id="address3" />
            <label htmlFor="address3">
              <h5>HOME</h5>
              <p>#322/1, Alberto Road</p>
              <p>Albenia Center</p>
              <p>2nd st. Gandhi Nagar</p>
              <p>9876543210</p>
              <p>Calicut, 678564</p>
              <p>Kerala, India</p>
            </label>
          </div>
        </form>
        <button>Add new address</button>
        <form className={styles.newAddress}>
          <label htmlFor="name">Name for this address</label>
          <input type="text" id="name" name="name" />
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
        </form>
      </div>
    </div>
  );
};
