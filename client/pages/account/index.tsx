import styles from "../../styles/account.module.scss";
import { CHeader } from "components";
import { Edit } from "assets/icons";

const ProfilePage = () => {
  return (
    <main>
      <CHeader />
      <div className="container">
        <div className={styles.account}>
          <div className={styles.info}>
            <h2>Bazil Korath</h2>
            <p>korathbasil@email.com</p>
            <p>+918848029932</p>

            <div className={styles.edit}>
              <Edit size="16px" fill="var(--clr-primary)" />
              <p>Edit</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
