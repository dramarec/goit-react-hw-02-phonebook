import React, { Component } from "react";
import Header from "./header/Header";
import Section from "./section/Section";
// import styles from "./App.module.css";
// import Button from "./button/Button";
import Contacts from "./contacts/Contacts";
import Form from "./form/Form";
import { v4 as uuidv4 } from "uuid";
import FindContact from "./findContact/FindContact";

export default class App extends Component {
    state = {
        contacts: [
            { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
            { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
            { id: "id-3", name: "Eden Clements", number: "645-17-79" },
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ],
        filter: "",
    };

    addContact = ({ name, number }) => {
        const { contacts } = this.state;
        const contact = {
            id: uuidv4(),
            name,
            number,
        };

        if (
            contacts.find(
                (contact) => contact.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            alert(`${name} такое имя уже есть!`);
        } else if (contacts.find((contact) => contact.number === number)) {
            alert(`${number} такой номер уже есть!`);
        } else if (name.trim() === "" || number.trim() === "") {
            alert("Все поля должны быть заполнены!");
        } else {
            this.setState((prevState) => {
                return {
                    contacts: [...prevState.contacts, contact],
                };
            });
        }
    };
    // ----
    removeContact = (e) => {
        // console.log(e.target.dataset.id);
        const id = e.target.dataset.id;
        this.setState({
            contacts: [
                ...this.state.contacts.filter((contact) => contact.id !== id),
            ],
        });
    };
    //----
    // removeContact = (contactId) => {
    //     // console.log(contactId);
    //     this.setState((prevState) => {
    //         return {
    //             contacts: prevState.contacts.filter(
    //                 ({ id }) => id !== contactId
    //             ),
    //         };
    //     });
    // };
    changeFilter = (e) => {
        this.setState({ filter: e.target.value });
    };
    getVisibleTasks = () => {
        const { contacts, filter } = this.state;
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    render() {
        const { contacts, filter } = this.state;
        const visibleTasks = this.getVisibleTasks();
        return (
            <>
                <Header title="Home Work #2 Phonebook" />
                <Section title="Phonebook">
                    <Form onAddContact={this.addContact} />
                </Section>

                {contacts.length > 1 && (
                    <Section title="Find contacts by name">
                        <FindContact
                            filter={filter}
                            onChangeFilter={this.changeFilter}
                        />
                    </Section>
                )}

                {contacts.length > 0 && (
                    <Section title="Contacts">
                        <Contacts
                            tasks={visibleTasks}
                            onRemove={this.removeContact}
                        />
                    </Section>
                )}
            </>
        );
    }
}
