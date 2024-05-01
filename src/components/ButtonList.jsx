import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const List = [
    "All",
    "Cricket",
    "Gaming",
    "Cooking",
    "News",
    "Business",
    "Podcasts",
    "Vlog",
    "Songs",
    "Music",
    "AI",
  ];
  return (
    <div className="flex">
      {List.map((item) => {
        return <Button key={item} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
