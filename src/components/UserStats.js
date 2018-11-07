import React from 'react';
import UserAvatar from './UserAvatar';

const UserStats = ({user}) => (
  <div>
    <div>
      <UserAvatar user={user} />
      <h4>{user.name}</h4>
    </div>
    <div>
      <div>{user.followers} Followers</div>
      <div>Following {user.following}</div>
    </div>
  </div>
)

export default UserStats;