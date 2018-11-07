import React from 'react';
import {Image} from 'react-bootstrap';

const UserAvatar = ({user, size}) => (
  <Image src={user.avatar} circle className={size} />
  // <img className={`circle ${size || ""}`} alt="user avatar" src={user.avatar} />
)

export default UserAvatar;