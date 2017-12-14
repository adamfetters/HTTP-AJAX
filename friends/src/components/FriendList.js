import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveFriends } from '../actions';
import Friend from '../components/Friend';

class FriendsList extends Component {
  componentDidMount() {
    this.props.retrieveFriends();
  }

 
  render() {
    return (
      <div>
        <ul className='friend-list'>
          {this.props.friends.map((friend, index) => <Friend friend={friend} key={friend.name} index={index} />)}
        </ul>
      </div>
    )
  }
}

const maptStateToProp = (state) => {
  return {
    friends: state.friends
  }
}

export default connect(maptStateToProp, { retrieveFriends } )(FriendsList);
