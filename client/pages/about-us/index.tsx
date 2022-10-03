import Link from "next/link";

import styles from "../../styles/about.module.scss";
import { CHeader } from "components";
import { Help, Instagram } from "assets/icons";

const AboutUsPage = () => {
  return (
    <section>
      <CHeader />
      <div className="container">
        <div className={styles.about}>
          <h1>420VOGUE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            amet, assumenda ducimus aspernatur, atque a vitae quas sit aliquam,
            quia sequi tenetur dolor excepturi praesentium porro vel suscipit
            vero culpa. Quibusdam dolorem ad fugit sed neque aliquid eligendi
            earum rem reiciendis eum cum totam ullam, molestiae delectus error.
            Pariatur, perspiciatis!
          </p>

          <div className={styles.links}>
            <Link href={"/help"}>
              <a className="button-link-white">
                <div className={styles.iconWrapper}>
                  <Help size="25px" />
                </div>
                Help
              </a>
            </Link>

            <a
              href="https://www.instagram.com/420__vogue/"
              target="_blank"
              rel="noreferrer"
              className="button-link-white"
            >
              <div className={styles.iconWrapper}>
                <Instagram size="25px" />
              </div>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
