import { Component } from "react";
import styles from "../pages/home/Home.module.css";

class RenderEmployee extends Component {
  render() {
    let { blog } = this.props;
    //let employee = this.props.employee;
    return (
      <div className={styles["employee-card"]}>
        <div className={styles["employee-image-container"]}>
          <img
            className={styles["employee-image"]}
            src={blog.imageUrl}
            alt=""
          />
        </div>
        <p>{blog.title}</p>
      </div>
    );
  }
}
export default RenderEmployee;
