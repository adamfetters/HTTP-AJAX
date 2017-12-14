import React, { Component } from 'react';
import { connect } from 'react - redux'
import { addFriend } from '../actions';

class FriendForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: 0,
      email: ''
    };

    this.addFriend = this.addFriend.bind(this);
    this.updateFriend = this.updateFriend.bind(this);
  }

  addFriend(event) {
    event.preventDefault();
    this.props.addFriend({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
    this.setState({
      name: '',
      age: 0,
      email:''
    });
  }

  updateFriend(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div className="FriendForm">
        <form onSumbit={this.addFriend}>
          <input  
            onChange={this.updateFriend}
            placeholder="Add Friend"
            value={this.state.name}
          />
        </form>
      </div>
    );
  }
}

const maptStateToProps = (state) => {
  return {
    friends: state.friends
  }
}

export default connect(maptStateToProps, { addFriend })(FriendForm);