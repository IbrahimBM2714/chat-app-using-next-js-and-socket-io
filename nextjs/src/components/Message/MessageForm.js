import React from "react";

import { addMessage } from "@/lib/action";

const MessageForm = ({ conversationId }) => {
  return (
    <div>
      <form action={addMessage}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter message"
            name="message"
          />
          <input type="number" name="userId" value={8} hidden />
          <input
            type="number"
            name="conversationId"
            value={conversationId}
            hidden
          />
          <button onClick={handleSend}>Send message</button>
        </form>
    </div>
  );
};

export default MessageForm;
