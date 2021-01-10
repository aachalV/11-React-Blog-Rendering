export const blogContent = (title, author, text) => {
  const div = document.createElement("div");
  div.classList.add("blog-content");

  const h2 = document.createElement("h2");
  h2.innerHTML = title;

  const h3 = document.createElement("h3");
  h3.innerHTML = `Author : ` + author;

  const p = document.createElement("p");
  p.innerHTML = text;

  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
};
