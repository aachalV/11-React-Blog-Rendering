import styles from "../footer/Footer.module.css";

function Footer() {
  return (
    <footer id="contact">
      <p>email : aachal@gamil.com</p>
      <p className={styles["text"]}>
        © 2020 All Rights Reserved by <span>Aachal Vartak</span>
      </p>
      <div className={styles["social-links"]}>
        <a href="#" class="fa fa-twitter twitter"></a>|
        <a href="#" class="fa fa-linkedin linkedin"></a>|
        <a href="#" class="fa fa-facebook facebook"></a>|
        <a href="#" class="fa fa-github github"></a>
      </div>
      <a id="upArrow" href="#nav">
        <i class="fa fa-arrow-circle-up"></i>
      </a>
    </footer>
  );
}
export default Footer;
