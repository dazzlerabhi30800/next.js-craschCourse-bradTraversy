"use client";
import { useState } from "react";

const CourseSearch = ({ getSearchResults, setLoading }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await fetch(`/api/courses/search?query=${searchQuery}`);
    const filterData = await res.json();
    setLoading(false);
    if (filterData.length > 0) {
      getSearchResults(filterData);
    } else {
      getSearchResults(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="searchInput"
        placeholder="Search Courses..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
};

export default CourseSearch;
