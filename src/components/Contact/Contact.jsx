import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.contactbox}>
      <div>
        <p className={css.user}>
          <FaUser /> {name}
        </p>
        <span className={css.phone}>
          <FaPhone /> {number}
        </span>
      </div>
      <button type="submit" className={css.delite} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
