import { Switch, Route } from "react-router-dom";
import { Col, Row } from "antd";
import styles from "./styles.module.css";
import Home from "../../pages/Home";
import HeaderForm from "./HeaderForm";
import Event from "pages/Event";

function App() {
  return (
    <div className={styles.container}>
      <Row justify="center">
        <Col span={14} className={styles.col}>
          <HeaderForm />
          <div className={styles.content}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/event/:id" component={Event} />
            </Switch>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
