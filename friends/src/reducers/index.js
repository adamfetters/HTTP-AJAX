import { RETRIEVE_FRIENDS, ADD_FRIEND } from '../actions';

export default (friends = [], action) => {
  switch(action.type) {
    case RETRIEVE_FRIENDS:
      return action.payload.data;
    case ADD_FRIEND:
      return friends.concat(action.payload);
    default: 
      return friends;
  };
};