export const blogImage = (imageUrl) => {
  //generate Blog Image Markup
  const div = document.createElement("div");
  div.classList.add("blog-image");

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "Some Alternate Description...";

  div.appendChild(img); //append child
  //div.appendChild(); //append sibling

  return div; //return the markup
};
