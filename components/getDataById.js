const editedBookMarkTitle = document.getElementById("edited-bookmark-title");
const editedBookMarkLink = document.getElementById("edited-bookmark-link");
const editedBookMarkTags = document.getElementById("edited-bookmark-tags");
const editedBookMarkForm =
  document.getElementsByClassName("edit-bookmark-form")[0];
const getDataById = async (id) => {
  let response = await fetch(
    `https://my-bookmark-application.herokuapp.com/api/bookmarks/${id}`
  );
  let data = await response.json();

  editedBookMarkForm.classList.remove("hidden");
  editedBookMarkTitle.value = data.title;
  editedBookMarkLink.value = data.link;
  editedBookMarkTags.value = data.tags;

  editedBookMarkForm.setAttribute("id", data._id);

  return data;
};

export default getDataById;
