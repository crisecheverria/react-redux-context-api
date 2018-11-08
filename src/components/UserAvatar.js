import React from 'react';
import {Image} from 'react-bootstrap';
import {UserContext} from '../App';

const UserAvatar = ({size}) => (
  <UserContext.Consumer>
    {user => (
      <Image src={user.avatar} circle className={size} />
    )}
  </UserContext.Consumer>
)

export default UserAvatar;