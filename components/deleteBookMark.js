const deleteBookMark = async (id) => {
  const url = `https://my-bookmark-application.herokuapp.com/api/bookmarks/${id}`;
  // const url = `http://localhost:5000/api/bookmarks/${id}`;
  let response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let responseData = await response.json();
};

export default deleteBookMark;
