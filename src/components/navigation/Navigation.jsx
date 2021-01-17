import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../navigation/Navigation.module.css";
class Navigation extends Component {
  render() {
    return (
      <div id="nav" className={styles["navbar"]}>
        <div>
          <img
            src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/bltc1a71705f49d391d/5de663548d1dce6ad6bed8bf/header-logo.svg?format=pjpg&width=220"
            alt=""
            className={styles["logo"]}
          />
        </div>
        <div className={styles["nav-links"]}>
          <Link to="/">Home </Link>
          <a href="/">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}
export default Navigation;
