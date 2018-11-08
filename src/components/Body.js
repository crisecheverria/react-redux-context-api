import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

const Body = ({ user }) => (
  <div className="body">
    <Sidebar />
    <Content />
  </div>
);

export default Body;
