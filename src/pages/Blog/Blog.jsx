import { Component } from "react";
import styles from "../Blog/Blog.module.css";

class Blog extends Component {
  render() {
    return (
      <div className={styles["row"]}>
        <div id="root" className={styles["main"]}>
          <h2 className={styles["myBlog"]}>BLOG</h2>

          <div className={styles["blog-image"]}>
            <img src="" alt="" />
          </div>

          <div className={styles["blog-content"]}>
            <h2>Blog Title</h2>
            <h3>Author</h3>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              eos perferendis sed cum, fugit sequi ex officia dolore culpa neque
              mollitia quaerat dolores a nesciunt quos odio fugiat vero nam
              deleniti veniam ducimus esse ullam provident.
            </p>

            <br />
          </div>
        </div>
        <div id="related-links" className={styles["side"]}>
          <h2>Related Links</h2>
          <ul>
            <li>Related Links</li>
            <li>Related Links</li>
            <li>Related Links</li>
            <li>Related Links</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Blog;
