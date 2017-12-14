import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriend } from '../actions';

class FriendForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
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

  formIsValid() {
    if (this.state.name === '' ) {
        return false;
        }
        return true;
  }

  
  addFriend(event) {
    event.preventDefault();
    if (this.formIsValid()) {
      this.props.addFriend({
      name: this.state.name
    });
    this.setState({
      name: ''
    });
  } else {
    alert('Please fill out form completely');
  }
  }

  render() {
    return (
      <div className="FriendForm">
        <form onSubmit={this.addFriend}>
          <input type="text"
           required={true}
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