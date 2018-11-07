import React from 'react';
import {Image} from 'react-bootstrap';
import { connect } from "react-redux";

const UserAvatar = ({user, size}) => (
  <Image src={user.avatar} circle className={size} />
)

// This mapStateToProps function extracts a single
// key from state (user) and passes it as the `user` prop
const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(UserAvatar);