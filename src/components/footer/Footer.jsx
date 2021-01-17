import styles from "../footer/Footer.module.css";

function Footer() {
  return (
    <footer id="contact">
      <p>email : aachal@gamil.com</p>
      <p className={styles["text"]}>
        © 2020 All Rights Reserved by <span>Aachal Vartak</span>
      </p>
      <div className={styles["social-links"]}>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          class="fa fa-twitter twitter"
        ></a>
        |
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          class="fa fa-linkedin linkedin"
        ></a>
        |
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          class="fa fa-facebook facebook"
        ></a>
        |<a href="https://github.com/" class="fa fa-github github"></a>
      </div>
      <a id="upArrow" href="#nav" target="_blank" rel="noreferrer">
        <i class="fa fa-arrow-circle-up"></i>
      </a>
    </footer>
  );
}
export default Footer;
