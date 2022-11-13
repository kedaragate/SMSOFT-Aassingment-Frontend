const submitEditedBookMark = async (data, id) => {
  console.log(data);
  const url = `https://my-bookmark-application.herokuapp.com/api/bookmarks/${id}`;
  // const url = `http://localhost:5000/api/bookmarks/${id}`;
  let response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let responseData = await response.json();
};

export default submitEditedBookMark;
