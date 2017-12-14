import React from 'react';


export default ({ friend, index }) => {
  return (
  <li className="friend">
   <p>{`Friend ${index + 1}`}</p>
   <p>{`Name: ${friend.name}`}</p>
   <p>{`Age: ${friend.age}`}</p>
   <p>{`Email: ${friend.email}`}</p>
  </li>
  )
}

