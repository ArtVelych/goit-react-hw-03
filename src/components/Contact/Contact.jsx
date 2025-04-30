import css from "./Contact.module.css";

import { FaUser, FaPhoneAlt } from "react-icons/fa";

export default function Contact({ name, number }) {
  return (
    <li className={css.contact}>
      <div className={css.userData}>
        <div className={css.dataBox}>
          <div>
            <FaUser />
          </div>
          <p>{name}</p>
        </div>
        <div className={css.dataBox}>
          <div>
            <FaPhoneAlt />
          </div>
          <p>{number}</p>
        </div>
      </div>
      <button className={css.contactButton}>Delete</button>
    </li>
  );
}
