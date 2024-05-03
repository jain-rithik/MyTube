import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Rithik Jain",
    text: "lorem ipsum dolor sit am",
    replies: [
      {
        name: "Dipesh",
        text: "Kya haal chal",
        replies: [
            {
                name: "Rithik Jain",
                text: "Bas kuch nahi",
                replies: []
            }
        ],
      },
      {
        name: "Atharv",
        text: "Kab aa raha hai",
        replies: [],
      },
      {
        name: "Karthik",
        text: "Kab join kiya",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay",
    text: "lorem ipsum dolor sit am",
    replies: [
      {
        name: "Jack",
        text: "Namaste",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-3 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData}/>
    </div>
  );
};

export default CommentsContainer;
