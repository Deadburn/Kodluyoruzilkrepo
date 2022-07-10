import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Loading from "components/Loading";

import styles from "./styles.module.css";
import { Typography } from "antd";
import { GET_EVENT } from "./queries";
const { Title } = Typography;

function Event() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Loading />;
  }

  const { event } = data;
  console.log(event);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className={styles.styleDate}>
        <Title level={3}>{event.title}</Title>
        <p>{event.date }</p>
      </div>
      <div className={styles.description}>{event.desc}</div>
    </div>
  );
}

export default Event;
