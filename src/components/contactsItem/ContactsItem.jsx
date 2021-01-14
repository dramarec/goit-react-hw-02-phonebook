import React from "react";
import styles from "./ContactsItem.module.css";

const ContactsItem = ({ dataId, name, number, onRemove }) => (
    <li className={styles.item}>
        <span className={styles.span}>√</span>
        <p className={styles.text}>{name}</p>
        <p className={styles.text}>{number}</p>

        <button
            data-id={dataId}
            type="button"
            className={styles.button}
            onClick={onRemove}
        >
            Удалить
        </button>
    </li>
);

export default ContactsItem;
