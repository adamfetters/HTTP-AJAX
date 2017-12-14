import { RETRIEVE_FRIENDS, ADD_FRIEND, DELETE_FRIEND } from '../actions';
import { combineReducers } from 'redux';

const friendsReducer = (friends = [], action) => {
  switch(action.type) {
    case RETRIEVE_FRIENDS:
      return action.payload.data;
    case ADD_FRIEND:
      return friends.concat(action.payload);
    case DELETE_FRIEND:
      return friends.filter(({ index }) => index !== action.data);
    default: 
      return friends;
  }
};


const rootReducer = combineReducers({
  friends: friendsReducer
});

export default rootReducer;
  