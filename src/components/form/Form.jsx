import React, { Component } from "react";
import styles from "./App.module.css";

export default class Form extends Component {
    state = {
        // contacts: [],
        // filter: "",
        name: "",
        number: "",
    };

    handleInputChange = (e) => {
        // console.log("props", this.props);
        // const { name, value } = e.target;
        // console.log("value", value);
        // console.log("name", name);
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddContact({
            name: this.state.name,
            number: this.state.number,
        });
        this.setState({
            name: "",
            number: "",
        });
    };

    render() {
        // const { name } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        className={styles.input}
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Number
                    <input
                        type="text"
                        name="number"
                        className={styles.input}
                        placeholder="Number"
                        value={this.state.number}
                        onChange={this.handleInputChange}
                    />
                </label>
                <button className={styles.button} type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}

// на функциях не получается
// import React from "react";

// const Form = (props) => {
//     console.log(props);
//     // console.log("number", number);
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         console.log("value", value);
//         console.log("name", name);
//         props.setState({
//             [e.target.name]: e.target.value,
//         });
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         props.handleAddContact({
//             name: props.name,
//             number: props.number,
//         });
//         props.setState({
//             name: "",
//             number: "",
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             {/* {name} */}
//             <label>
//                 Name
//                 <input
//                     type="text"
//                     name="name"
//                     className={styles.input}
//                     placeholder="Name"
//                     value={props.name}
//                     onChange={handleInputChange}
//                 />
//             </label>
//             <label>
//                 Number
//                 <input
//                     type="text"
//                     name="number"
//                     className={styles.input}
//                     placeholder="Number"
//                     value={props.number}
//                     onChange={handleInputChange}
//                 />
//             </label>
//             <button className={styles.button} type="submit">
//                 Add contact
//             </button>
//         </form>
//     );
// };

// export default Form;
