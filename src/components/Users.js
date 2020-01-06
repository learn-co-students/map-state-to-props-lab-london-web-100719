import React, { Component } from "react";
import { connect } from "react-redux";
class Users extends Component {
  render() {
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.users.map((user, idx) => {
            return <li key={idx}>{user.username}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// connect this component to Redux
export default connect(state => ({
  users: state.users,
  numberOfUsers: state.users.length
}))(Users);
