import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveFriends, addFriend } from '../actions';
import Friend from '../components/Friend'

class FriendsList extends Component {
  componentDidMount() {
    this.props.retrieveFriends();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map((friend, i) => {
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { retrieveFriends})(FriendsList);