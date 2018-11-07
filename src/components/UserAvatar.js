import React from 'react';
import {Image} from 'react-bootstrap';

const UserAvatar = ({user, size}) => (
  <Image src={user.avatar} circle className={size} />
)

export default UserAvatar;