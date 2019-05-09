import React, {Component} from 'react';


class ChatBar extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      content: "",
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }

  handleEnter(event) {
    if (event.key === 'Enter') {
      this.props.addNewMessage(this.state)
      
      this.setState({content: ""})
    }
  }

  handleInput(event) {
    this.setState({
      content: event.target.value
    })
  }

  handleUser(event) {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <footer className="chatbar">
        <input onKeyPress={this.handleEnter} onChange={this.handleUser} className="chatbar-username" defaultValue={this.props.username} />
        <input
          value={this.state.content}
          onChange={this.handleInput}
          onKeyPress={this.handleEnter}
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
        />
      </footer>
      );
    }
}

export default ChatBar;