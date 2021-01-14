import React from "react";
import ContactsItem from "../contactsItem/ContactsItem";

const Contacts = ({ tasks, onRemove }) => {
    return (
        <ul>
            {tasks.map(({ name, number, id }) => (
                <ContactsItem
                    key={id}
                    name={name}
                    number={number}
                    onRemove={onRemove}
                    dataId={id}
                />
            ))}
        </ul>
    );
};

export default Contacts;
