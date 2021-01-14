import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
    const styles = {
        textAlign: "center",
    };

    return (
        <header style={styles}>
            <h1>{props.title}</h1>
        </header>
    );
};

export default Header;

Header.propTypes = {
    // здесь не получается сделать .isRequired!
    props: PropTypes.string,
};
