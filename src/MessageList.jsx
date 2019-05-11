import React, {Component} from 'react';
import Message from './Message.jsx';

const MessageList = props => {
  const list = props.messages.map(e => {
    return <Message 
    key = { e.id }
    username = { e.username }
    content = { e.content }
    notification = {e.notification} />
  })


  return (
    <main className="messages">
      {list}
    </main>
  );
}

export default MessageList;