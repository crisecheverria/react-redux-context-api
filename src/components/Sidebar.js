import React from 'react';
import UserStats from './UserStats';

const sidebar = {
  minWidth: 250,
  maxWidth: 250,
  minHeight: '100vh',
  float: 'left',
  backgroundColor: '#E3DEDE',
  padding: 20
}

const Sidebar = ({user}) => (
  <div style={sidebar}>
    <UserStats />
  </div>
)

export default Sidebar;