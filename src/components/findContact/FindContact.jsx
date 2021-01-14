import React from "react";

const FindContact = ({ filter, onChangeFilter }) => {
    return (
        <label>
            {/* Find contacts by name */}
            <input
                type="text"
                // name="name"
                // className={styles.input}
                placeholder="Name"
                value={filter}
                onChange={onChangeFilter}
            />
        </label>
    );
};

export default FindContact;
