import { Component } from "react";
import { withRouter } from "react-router-dom";

import styles from "../../pages/home/Home.module.css";

class RenderBlogTile extends Component {
  // renderBlog = (event) => {
  //   this.props.history.push("/blog", { blog: this.props.blog });
  // };
  renderBlog = (event) => {
    this.props.history.push(`/blog/${this.props.blog.id}`);
  };
  render() {
    let { blog } = this.props;
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
