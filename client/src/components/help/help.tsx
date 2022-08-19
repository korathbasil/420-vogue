import styles from "./help.module.scss";

export const Help = () => {
  return (
    <div className={styles.help}>
      <p>
        Please contact our dupport team for any enquiry. Please attach relevent
        screenshots.
      </p>
      <div className={styles.links}>
        <a href="mailto:support@420vogue.in?subject=Enquiry" target={"_blank"}>
          support@420vogue.in
        </a>
      </div>
    </div>
  );
};
