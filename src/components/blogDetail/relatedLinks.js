import { renderNewBlog } from "../helper/renderNewBlog.js";

export const relatedLinks = (links) => {
  const ul = document.createElement("ul");
  let h2 = document.createElement("h2");
  h2.innerHTML = "Related Links to blogs :";
  ul.appendChild(h2);
  links.forEach((link) => {
    let li = document.createElement("li");
    li.innerHTML = link.title;
    li.id = link.id;
    //append an event listener
    //pass reference

    li.addEventListener("click", () => {
      //f will be called on click only
      renderNewBlog(li.id);
    });

    ul.appendChild(li);
  });
  return ul;
};
