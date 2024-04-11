import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const getVisibleContacts = (contacts, filter) => {
  if (filter.length > 0) {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    return contacts;
  }
};
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const contactsData = getVisibleContacts(contacts, filter);

  return (
    <div className={css.listBox}>
      <ul className={css.listContact}>
        {contactsData.map((contact) => (
          <li key={contact.id} className={css.item}>
            <Contact contact {...contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
