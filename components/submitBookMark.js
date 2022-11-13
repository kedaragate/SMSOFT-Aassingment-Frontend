const submitBookMark = async (data) => {
  const url = `http://localhost:5000/api/bookmarks`;
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let responseData = await response.json();
};

export default submitBookMark;
