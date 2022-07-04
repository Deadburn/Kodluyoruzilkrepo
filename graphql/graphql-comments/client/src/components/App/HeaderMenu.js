import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./styles.module.css";

const items = [
  {
    label: "Home",
    key: "mail",
  },
];

function HeaderMenu() {
  const location = useLocation();

  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

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
