import styles from "./add-manager-form.module.scss";

export const AddManagerForm = () => {
  return (
    <div className={styles.AddManager}>
      <h3>Please fill the form below.</h3>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          pattern="[0-9]+"
          maxLength={10}
          minLength={10}
          required
        />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" />

        <button type="submit">Add Manager</button>
      </form>
    </div>
  );
};
