import createBookmarkCardHTML from "./createBookMarkCardHTML.js";

const bookMarksContainer = document.getElementsByClassName(
  "bookmarks-container"
)[0];

const getAllBookMarks = async () => {
  const url = `https://my-bookmark-application.herokuapp.com/api/bookmarks`;
  // const url = `http://localhost:5000/api/bookmarks`;
  let response = await fetch(url);
  let data = await response.json();

  const html = data.map((item) => {
    return createBookmarkCardHTML(item);
  });
  const loader = document.getElementsByClassName("loader")[0];
  loader.remove();

  bookMarksContainer.insertAdjacentHTML("beforeend", html.join(""));
  return data;
};

export default getAllBookMarks;
