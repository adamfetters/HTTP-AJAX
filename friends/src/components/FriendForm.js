import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
    this.updateFriendInfo = this.updateFriendInfo.bind(this);
  }

  updateFriendInfo(event) {
    event.preventDefault();
    this.setState({
      name: event.target.value
    })
  }

  addFriend(event) {
    event.preventDefault();
      this.props.addFriend({
      name: this.state.name
    });
    this.setState({
      name: ''
    });
  }

  render() {
    return (
      <div className="FriendForm">
        <form onSubmit={this.addFriend}>
          <input type="text"
           value={this.state.name}
           onChange={this.updateFriendInfo} 
           placeholder="Name"
           
           />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addFriend: addFriend
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FriendForm);