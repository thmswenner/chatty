import React, {Component} from 'react';

const Message = props => {
  return (
    <div>
      <div className="message">
        <span className="message-username">{props.username}</span>
        <span className="message-content">{props.content}</span>
        <span className="message system">{props.notification}</span>
      </div>
    </div>
  );
}

export default Message;