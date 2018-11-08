import React from 'react';
import UserAvatar from './UserAvatar';
import { connect } from "react-redux";

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

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(UserStats);