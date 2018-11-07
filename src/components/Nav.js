import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import UserAvatar from './UserAvatar';

const NavBar = ({user}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">Tweet</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <UserAvatar user={user} size="small" />
    </Nav>
  </Navbar>
)

export default NavBar