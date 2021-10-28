import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostList = () => {
  useProtectedPage();
  return (
    <div>
      <h1>Post List</h1>
    </div>
  );
};

export default PostList;
