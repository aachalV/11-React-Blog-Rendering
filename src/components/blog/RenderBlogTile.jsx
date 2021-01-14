import { Component } from "react";
import { withRouter } from "react-router-dom";

import styles from "../../pages/home/Home.module.css";

// import fetchData from "../../api/fetchData";
class RenderBlogTile extends Component {
  renderBlog = (event) => {
    // console.log("renderblog=>Event", this.props.blog);
    this.props.history.push("/blog", { blog: this.props.blog });
  };

  render() {
    let { blog } = this.props;
    // console.log("PROPS=>", blog);
    return (
      <div className={styles["employee-card"]} onClick={this.renderBlog}>
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
export default withRouter(RenderBlogTile);
