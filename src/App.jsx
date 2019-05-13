import React, {Component} from "react";
import NavBar from "./NavBar.jsx";
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx";
const uuidv1 = require("uuid/v1");


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: "Anonymous"},
      messages: [],
      connected: ""
    }

    this.socket = {}
    this.addNewMessage = this.addNewMessage.bind(this);
  }


  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");

    this.socket.onopen = (event) => {
      console.log("Connected To Server")
    }

    const self = this;

    this.socket.onmessage = function(message) {

      let incomingMsg = JSON.parse(message.data);
      incomingMsg.id = uuidv1();

      switch (incomingMsg.type) {
        case "incomingMessage":
        self.setState({messages: self.state.messages.concat(incomingMsg)});
        break;

        case "incomingConnection":
        self.setState({connected: incomingMsg.connected})
        break;

        case "incomingNotification":
        self.setState({messages: self.state.messages.concat(incomingMsg)});
        break;

        default:
        throw new Error("Unknown event type" + message.type)
      }
    }
  }

  addNewMessage(content) {
    if (content.name === "" && content.content) {
      const message = `{"type": "postMessage", "username": "${this.state.currentUser.name}", "content": "${content.content}"}`
      this.socket.send(message)
    } else if (content.name !== this.state.currentUser.username && content.content) {
      this.setState({currentUser: {name: content.name}})
      const message = `{"type": "postMessage", "username": "${content.name}", "content": "${content.content}"}`
      const notification = `{"type": "postNotification", "notification": "${this.state.currentUser.name} changed username to ${content.name}"}`
      this.socket.send(notification);
      this.socket.send(message)
    }
  }

  render() {
    return (
      <div>
        <NavBar numberOfUser={this.state.connected}/>
        <MessageList username={this.state.currentUser.name} notification={this.state.notification} messages={this.state.messages}/>
        <ChatBar addNewMessage={this.addNewMessage} username={this.state.currentUser.name} />
      </div>
    );
  }
}

export default App;