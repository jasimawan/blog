import React from "react";

const COMMENT_STATUS = {
  pending: "This comments is awaiting for moderation.",
  rejected: "This comment has been rejected.",
};

const CommentList = ({ comments }) => {
  console.log(comments);
  const renderedComments = comments.map((comment) => {
    return (
      <li key={comment.id}>
        {comment.status === "approved"
          ? comment.content
          : COMMENT_STATUS[comment.status]}
      </li>
    );
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
