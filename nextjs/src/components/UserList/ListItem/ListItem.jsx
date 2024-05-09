import Link from "next/link";
import Styles from "./listItem.module.css";

const ListItem = ({ index, user }) => {
  return (
    <Link className={`${Styles.listItem}`} key={index} href={`/${user.Id}`}>
      {user.Username}
    </Link>
  );
};

export default ListItem;
