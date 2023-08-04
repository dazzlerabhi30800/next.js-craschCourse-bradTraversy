import React from "react";

const PostInput = ({ getSearchResults }) => {
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target);
    const title = e.target[0].value;
    const description = e.target[1].value;
    const link = e.target[2].value;
    const level = e.target[3].value;
    const res = await fetch("/api/courses/", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        level: level,
        link: link,
      }),
    });

    const courses = await res.json();
    getSearchResults(courses);
    // console.log(courses);
  };
  return (
    <form onSubmit={handlePostSubmit}>
      <input type="text" placeholder="Enter title" />
      <input type="text" placeholder="Enter Description" />
      <input type="text" placeholder="Enter Link" />
      <input type="text" placeholder="Enter Level" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostInput;
