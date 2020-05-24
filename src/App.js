import React, { Component } from "react";
import User from "./User";
import "./App.css";

class App extends Component {
  state = {
    user: {},
  };

  getUser = () => {
    const name = this.refs.name.value;
    fetch(`http://api.github.com/users/${name}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          user: {
            name: data.name,
            location: data.location,
            bio: data.bio,
            //repos: data.repos_url, // na listi je samo da nezaboravim da postoji :D
            avatar: data.avatar_url,
          },
        });
      }); //console.log(data));
    //alert(name);
  };

  resetForm = () => {
    this.setState({
      ...this.state,
      user: "",
    });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <input type="text" placeholder="Search" ref="name" />
        <button onClick={this.getUser}>Search github users</button>
        <button onClick={this.resetForm}>Reset</button>
        <User user={user} />
      </div>
    );
  }
}

export default App;
