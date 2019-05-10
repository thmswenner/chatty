import React, {Component} from "react";
import NavBar from "./NavBar.jsx";
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx";
const uuidv1 = require("uuid/v1");


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: ""},
      messages: [],
      notification: "",
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

      if (incomingMsg.type === "incomingMessage") {
        self.setState({messages: self.state.messages.concat(incomingMsg)});
      } else if (incomingMsg.type === "incomingConnection") {
        self.setState({connected: incomingMsg.connected})
      } else if (incomingMsg.type === "incomingNotification") {
        self.setState({notification: incomingMsg.notification});
      } else {
        throw new Error("Unknown event type" + message.type)
      }
    }
    
  }

  addNewMessage(content) {
    const message = `{"type": "postMessage", "username": "${content.name}", "content": "${content.content}"}`
    this.socket.send(message);
    this.setState({currentUser: {name: content.name}})
    if(this.state.currentUser.name === ''){
      return;
    } else if (this.state.currentUser.name !== content.name) {
      const notification = `{"type": "postNotification", "notification": "${this.state.currentUser.name} changed username to ${content.name}"}`
      this.socket.send(notification);
    }
  }

  render() {
    return (
      <div>
        <NavBar numberOfUser={this.state.connected}/>
        <MessageList notification={this.state.notification} messages={this.state.messages}/>
        <ChatBar addNewMessage={this.addNewMessage} username={this.state.currentUser.name} />
      </div>
    );
  }
}

export default App;