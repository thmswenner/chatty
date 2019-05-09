import React, {Component} from 'react';

const Message = props => {
  return (
    <div>
      <div className="message">
        <span className="message-username">{props.username}</span>
        <span className="message-content">{props.content}</span>
      </div>
      <div className="message system">
        <p>Anonymous1 changed their name to nomnom.</p>
      </div>
    </div>
  );
}

export default Message;