import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
