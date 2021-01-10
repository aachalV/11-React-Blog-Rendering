// 1. fetch a new blog object based on id
// 2. Inside the root div
//      render blog image
//      render blog Content
//3. Inside aside div
//      render links
//import { findBlogById } from "./findBlogById.js";
import { data } from "../data.js";
import { blogImage } from "../components/blogImage.js";
import { blogContent } from "../components/blogContent.js";
import { relatedLinks } from "../components/relatedLinks.js";

export const renderNewBlog = async (blogId) => {
  let blogs = await data;
  let targetBlog = blogs.filter((blog) => {
    return blog.id == blogId;
  });
  const blogObject = targetBlog[0];

  const rootDiv = document.getElementById("root");
  //clear content from root div
  rootDiv.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.classList.add("myBlog");
  h2.innerHTML = "My Blog";
  rootDiv.appendChild(h2);

  rootDiv.appendChild(blogImage(blogObject.imageUrl));
  rootDiv.appendChild(
    blogContent(blogObject.title, blogObject.author, blogObject.content)
  );

  const asideDiv = document.getElementById("related-links");
  //clear content from root div and aside div
  asideDiv.innerHTML = "";
  asideDiv.appendChild(relatedLinks(blogObject.links));
};
