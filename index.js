import getAllBookMarks from "./components/getAllBookMarks.js";
import submitBookMark from "./components/submitBookMark.js";

import submitEditedBookMark from "./components/submitEditedBookMark.js";
import getDataById from "./components/getDataById.js";
import deleteBookMark from "./components/deleteBookMark.js";
import createBookmarkCardHTML from "./components/createBookMarkCardHTML.js";

const bookMarksContainer = document.getElementsByClassName(
  "bookmarks-container"
)[0];

const addBookmarkForm = document.getElementById("add-bookmark-form");

addBookmarkForm.addEventListener("submit", (e) => {
  const form = new FormData(addBookmarkForm);
  const data = Object.fromEntries(form);
  const tags = data.tags.split(",");
  data.tags = tags;

  submitBookMark(data);
});

const afterCreatingHTML = getAllBookMarks();
afterCreatingHTML.then((data) => {
  const bookMarkEditButton =
    document.getElementsByClassName("edit-bookmark-btn");

  const bookMarkButtonArray = Array.from(bookMarkEditButton);
  bookMarkButtonArray.map((btn) => {
    btn.addEventListener("click", (e) => {
      const bookMarkId = e.target.parentElement.id;

      return getDataById(bookMarkId);
    });
  });

  const bookMarkDeleteButton = document.getElementsByClassName(
    "delete-bookmark-btn"
  );

  const bookMarkDeleteButtonArray = Array.from(bookMarkDeleteButton);
  bookMarkDeleteButtonArray.map((btn) => {
    btn.addEventListener("click", (e) => {
      const bookMarkId = e.target.parentElement.id;

      location.reload();
      return deleteBookMark(bookMarkId);
    });
  });
});

const editedBookMarkForm =
  document.getElementsByClassName("edit-bookmark-form")[0];

editedBookMarkForm.addEventListener("submit", (e) => {
  const id = e.target.id;
  const form = new FormData(editedBookMarkForm);
  const data = Object.fromEntries(form);
  const tags = data.tags.split(" ");
  data.tags = tags;

  submitEditedBookMark(data, id);
});

const bookMarkSearch = document.getElementById("bookmark-search-field");

bookMarkSearch.addEventListener("input", (e) => {
  const url = `http://localhost:5000/api/bookmarks`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.filter((ele) => {
        return ele.title.startsWith(e.target.value);
      });

      const filteredHTML = filteredData.map((ele) => {
        return createBookmarkCardHTML(ele);
      });
      bookMarksContainer.innerHTML = null;
      bookMarksContainer.insertAdjacentHTML("afterbegin", filteredHTML);
    });
});
