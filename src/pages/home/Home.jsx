import { Component } from "react";
import RenderBlogTile from "../../components/blog/RenderBlogTile";
import styles from "../home/Home.module.css";
import { data } from "../../api/data";
class Home extends Component {
  state = {
    blogs: [],
  };
  componentDidMount = () => {
    data("/blogList/blogs").then((response) => {
      this.setState({ blogs: response.data.data[0] });
    });
  };
  render() {
    return (
      <div>
        <h1 className={styles["heading"]}>Blog List</h1>
        <div className={styles["employees-container"]}>
          {this.state.blogs.map((blog) => {
            return <RenderBlogTile blog={blog} key={blog.id} />;
          })}
        </div>
      </div>
    );
  }
}
export default Home;
