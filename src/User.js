import React, { Component } from "react";

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h3>User Details</h3>
        <h3>{user.name}</h3>
        <h3>{user.location}</h3>
        <h3>{user.bio}</h3>
        <h3>{user.repos_url}</h3>
        <h3>{user.avatar}</h3>
      </div>
    );
  }
}
export default User;
