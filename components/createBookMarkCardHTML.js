const createBookmarkCardHTML = function (data) {
  return `<div id=${data._id} class="bookmark-card">
   
    <a href=${data.link} class=bookmark-link> <h3>${data.title}</h3></a>
    <div class=tags>
    ${data.tags
      .map((tag) => {
        return `<p class=tag-item>${tag}<p>`;
      })
      .join("")}</div>
  
    <button class=edit-bookmark-btn>Edit</button>
    <button class=delete-bookmark-btn>Delete</button>
  
    </div>`;
};

export default createBookmarkCardHTML;
