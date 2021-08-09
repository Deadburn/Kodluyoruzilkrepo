import React, { useState } from "react";

import styles from "./styles.module.css";

function ChatForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ppiiiiz")

    setMessage('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.textInput}
        />
      </form>
    </div>
  );
}

export default ChatForm;
