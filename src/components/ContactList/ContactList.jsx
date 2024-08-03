import css from "./contact.module.css";
import Contact from "./Contact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactlistUl}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
