import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/contactsSlice";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isError = useSelector(selectError);

  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.listBox}>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <ul className={css.listContact}>
        {contacts.map((contact) => (
          <li key={contact.id} className={css.item}>
            <Contact contact {...contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
