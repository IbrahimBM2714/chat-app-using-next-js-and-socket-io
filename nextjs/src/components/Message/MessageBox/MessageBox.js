import { getUserById } from "@/lib/data";
import Styles from './messageBox.module.css'

const MessageBox = async ({ message, user }) => {
  const singleUser = await getUserById(message.userId);


  return (
    <div className={`${Styles.container} ${singleUser[0].Username === user.user.username ? Styles.containerSender : Styles.containerReciever}`} >
      <div className={`${Styles.innerContainer} ${singleUser[0].Username === user.user.username ? Styles.sender : Styles.reciever}`} >
        <h1>{message.message}</h1>
        <h3>By: {singleUser[0].Username}</h3>
      </div>
    </div>
  );
};

export default MessageBox;
