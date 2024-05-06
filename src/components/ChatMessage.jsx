import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-3 shadow-sm p-2">
      <img
        className="rounded-full"
        src="https://yt4.ggpht.com/ytc/AIdro_kGMrO6ogHXeYWb2w3GjVdvHfXd6eXHUkvfofrKlicyUEba=s32-c-k-c0x00ffffff-no-rj"
        alt="user"
      />
      <div className="flex gap-2">
        <span className="font-bold">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
