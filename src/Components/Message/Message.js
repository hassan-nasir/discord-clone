import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";

function Message({ user, message, timestamp }) {
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message_content">
        <h3>
          {user.displayName}
          <span className="message_contentTime">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
