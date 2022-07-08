import { Switch, Route } from "react-router-dom";
import { Col, Row } from "antd";
import styles from "./styles.module.css";

import HeaderMenu from "../HeaderMenu";

//pages
import Home from "pages/Home";
import Post  from "pages/Post";
import NewPost from "pages/NewPost";
import PostCounter from "components/PostCounter";

function App() {
  return (
    <div className={styles.container}>
      <Row justify="center">
        <Col span={14} className={styles.col}>
          <Row>
            <Col span={18}>
              <HeaderMenu />
            </Col>
            <Col span={6}>
              <PostCounter />
            </Col>
          </Row>
          <div className={styles.content}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/new" component={NewPost} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
