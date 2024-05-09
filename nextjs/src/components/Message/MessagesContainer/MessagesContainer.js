import {
  getMessagesByConversationId,
} from "@/lib/data";
import SocketMessages from "../SocketMessages/SocketMessages";
import MessageBox from "../MessageBox/MessageBox";
import { auth } from "@/lib/auth";
import Styles from './showMessages.module.css'

const ShowMessages = async ({ conversationId }) => {
  const messages = await getMessagesByConversationId(conversationId);

  const user = await auth();

  return (
    <div className={Styles.container} >
      {messages?.map((message) => (
        <MessageBox message={message} user={user} />
      ))}
      <div>
        <SocketMessages conversationId={conversationId} user={user} />
      </div>
    </div>
  );
};

export default ShowMessages;
