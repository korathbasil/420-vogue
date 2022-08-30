import { NextPage } from "next";

import styles from "../../styles/help.module.scss";
import { CHeader } from "components";

const HelpPage: NextPage = () => {
  return (
    <main>
      <CHeader />
      <div className="container">
        <div className={styles.help}>
          <p>
            Please contact our dupport team for any enquiry. Please attach
            relevent screenshots.
          </p>
          <div className={styles.links}>
            <a
              href="mailto:support@420vogue.in?subject=Enquiry"
              target="_blank"
              rel="noreferrer"
            >
              support@420vogue.in
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HelpPage;
