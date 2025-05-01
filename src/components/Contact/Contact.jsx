import css from "./Contact.module.css";

import { FaUser, FaPhoneAlt } from "react-icons/fa";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={css.contact}>
      <div className={css.userData}>
        <div className={css.dataBox}>
          <div className={css.icon}>
            <FaUser size="20" />
          </div>
          <p>{name}</p>
        </div>
        <div className={css.dataBox}>
          <div className={css.icon}>
            <FaPhoneAlt size="20" />
          </div>
          <p>{number}</p>
        </div>
      </div>
      <button className={css.contactButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
