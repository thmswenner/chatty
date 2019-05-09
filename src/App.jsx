import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
const uuidv1 = require('uuid/v1');


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: ""},
      messages: []
    }

    this.socket = {}
    this.addNewMessage = this.addNewMessage.bind(this);
  }


  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');

    this.socket.onopen = (event) => {
      console.log('Connected To Server')
    }

    const self = this;

    this.socket.onmessage = function(message) {
      let incomingMsg = JSON.parse(message.data);
      incomingMsg.id = uuidv1();

      self.setState({messages: self.state.messages.concat(incomingMsg)})
    }
  }

  addNewMessage(content) {
    console.log(content)
    const output = `{"type": "postMessage", "username": "${content.name}", "content": "${content.content}"}`
    this.socket.send(output);
    this.setState({currentUser: {name: content.name}})
  }

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages}/>
        <ChatBar addNewMessage={this.addNewMessage} username={this.state.currentUser.name} />
      </div>
    );
  }
}

export default App;
