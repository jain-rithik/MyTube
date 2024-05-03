import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex items-center bg-gray-100 p-2 rounded-lg my-2">
      <i className="text-xl w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
        <FontAwesomeIcon icon={faUser} />
      </i>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
