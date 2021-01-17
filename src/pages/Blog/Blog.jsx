import { Component } from "react";
import { data } from "../../api/data";
import { Link } from "react-router-dom";
import styles from "../Blog/Blog.module.css";
class Blog extends Component {
  state = {
    blog: {},
  };
  componentDidMount() {
    data(`/blogList/blogs/${this.props.match.params.id}`)
      .then((response) => {
        let blog = response.data;
        this.setState({ blog: blog.data[0] });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("Previous state", prevState);
  //   if (nextProps.match.params.id !== prevState.blog.id) {
  //     data(`/blogList/blogs/${nextProps.match.params.id}`)
  //       .then((response) => {
  //         let blog = response.data;
  //         this.setState({ blog: blog.data[0] });
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   } else {
  //     return null;
  //   }
  // }

  render() {
    console.log("STATE=>", this.state);
    return (
      <div className={styles["row"]}>
        <div id="root" className={styles["main"]}>
          <h2 className={styles["myBlog"]}>BLOG</h2>

          <div className={styles["blog-image"]}>
            <img src={this.state.blog.imageUrl} alt="" />
          </div>

          <div className={styles["blog-content"]}>
            <h2>{this.state.blog.title}</h2>
            <h3>{this.state.blog.author}</h3>

            <p>{this.state.blog.content}</p>
            <br />
          </div>
        </div>
        <div id="related-links" className={styles["side"]}>
          <h2>Related Links</h2>
          <ul>
            {this.state.blog.links
              ? this.state.blog.links.map((link) => {
                  console.log(link.title);
                  return (
                    <li key={link.id}>
                      <Link to={`/blog/${link.id}`}>{link.title}</Link>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
    );
  }
}

export default Blog;
