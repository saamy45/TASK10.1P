import React from "react";
import './App.css';
import { Input, Button, Menu } from "semantic-ui-react";

function Header() {
  return (
    <Menu className="header">
      <Menu.Item name="logo">DEV@Deakin</Menu.Item>
      <Menu.Item>
        <Input icon="search" placeholder="Search..." />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button primary>Post</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Login</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
