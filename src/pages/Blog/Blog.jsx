import { Component } from "react";
import styles from "../Blog/Blog.module.css";
// import fetchData from "../../api/fetchData";
class Blog extends Component {
  // componentDidMount = async () => {
  //   let id = this.props.match.params.id;
  //   // let id = this.props.history.location.state.id;
  //   try {
  //     //   let data = await fetchData(`${employeesUrl}/${id}`);
  //     let data = await fetchData(id);
  //     this.setState({ blog: data });
  //   } catch (err) {
  //     console.log("error in fetching data", err);
  //   }
  // };
  render() {
    let { blog } = this.props;
    return (
      <div className={styles["row"]}>
        <div id="root" className={styles["main"]}>
          <h2 className={styles["myBlog"]}>BLOG</h2>

          <div className={styles["blog-image"]}>
            <img src={this.props.location.state.blog.imageUrl} alt="" />
          </div>

          <div className={styles["blog-content"]}>
            <h2>{this.props.location.state.blog.title}</h2>
            <h3>{this.props.location.state.blog.author}</h3>

            <p>{this.props.location.state.blog.content}</p>
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
