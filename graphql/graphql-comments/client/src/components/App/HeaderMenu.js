import { Menu } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./styles.module.css";

function HeaderMenu() {
  const location = useLocation();

  return (
    <div>
      <Menu mode="horizontal" selectedKeys={location.pathname} className={styles.headerMenu}>
        <Menu.Item key="/" className={styles.menuItem}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/new">
          <Link to="/new">New</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default HeaderMenu;
