import React, {Component} from 'react';
import Message from './Message.jsx';

const MessageList = props => {
  const list = props.messages.map(e => {
    return <Message 
    key = { e.id }
    username = { e.username }
    content = { e.content } />
  })

  const notification = <div className="message system">
    <p>{props.notification}</p>
  </div>

  return (
    <main className="messages">
      {list}
      {notification}
    </main>
  );
}

export default MessageList;