import axios from 'axios';

export const RETRIEVE_FRIENDS = 'RETRIEVE_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export const retrieveFriends = () => {
  const apiUrl = 'http://localhost:5000/friends';
  const retrieveFriends = axios.get(apiUrl);

  return {
    type: RETRIEVE_FRIENDS,
    payload: retrieveFriends
  };
};

export const addFriend = (friend) => {
  return {
    type: ADD_FRIEND,
    payload: friend
  };
};

export const deleteFriend = (index) => {
  return {
    type: DELETE_FRIEND,
    payload: index
  };
};