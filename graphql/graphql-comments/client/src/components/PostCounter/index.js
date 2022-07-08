import { Avatar, Badge } from "antd";
import React from "react";
import { useSubscription } from "@apollo/client";
import { POST_COUNT_SUBSCRIPTION } from "./queries";

import styles from "./styles.module.css";

function PostCounter() {
    const { loading, data } = useSubscription(POST_COUNT_SUBSCRIPTION);

    return (
    <div className={styles.container}>
      <Badge count={loading ? '?' : data.postCount} size="small">
        <Avatar shape="square" size="medium">
            <span className={styles.counterTitle}>Posts</span>
        </Avatar>
      </Badge>
    </div>
  );
}

export default PostCounter;
