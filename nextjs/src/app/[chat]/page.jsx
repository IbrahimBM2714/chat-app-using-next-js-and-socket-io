import { addConversation } from "@/lib/action";
import { getConversationId } from "@/lib/data";
import ShowMessages from "@/components/Message/MessagesContainer/MessagesContainer";
import { auth } from "@/lib/auth";

// Dynamic chat router used to chat with individual users
const Chat = async ({ params }) => {
  const user = await auth();

  await addConversation(user.user.id, params.chat);

  const conversationData = await getConversationId(user.user.id, params.chat);

  const conversationId = conversationData[0].id;

  return (
    <div>
      <ShowMessages conversationId={conversationId} />
    </div>
  );
};

export default Chat;
