import React from 'react';
import UserAvatar from './UserAvatar';
import {UserContext} from '../App';

const UserStats = () => (
  <UserContext.Consumer>
    {user => (
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
    )}
  </UserContext.Consumer>
    
)

export default UserStats;