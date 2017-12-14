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
      [event.target.name]: event.target.value
    })
  }

  formIsValid() {
    if (this.state.name === '' ||
        this.state.age === '' ||
        this.state.email === '' ) {
        return false;
        }
        return true;
  }

  
  addFriend() {
    // event.preventDefault();
    if (this.formIsValid()) {
      this.props.addFriend({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  } else {
    alert('Please fill out form completely');
  }
  }

  render() {
    return (
      <div className="FriendForm">
        <form>
          <input 
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={this.updateFriendInfo}
          /> 
           <input 
          name='age'
          placeholder='Age'
          value={this.state.age}
          onChange={this.updateFriendInfo}
          /> 
           <input 
          name='email'
          placeholder='Email'
          value={this.state.email}
          onChange={this.updateFriendInfo}
          /> 
        </form>
        <button onClick={this.addFriend}>Submit</button>
        
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