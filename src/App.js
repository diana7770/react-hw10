import { Component } from "react";
import { nanoid } from "nanoid";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    filter: "",
  };

  addContact = async (evt) => {
    evt.preventDefault();

    const contactExists = this.state.contacts.some((contact) =>
      contact.name
        .toLowerCase()
        .includes(evt.target.elements.contactName.value.toLowerCase())
    );

    if (contactExists) {
      alert(`${evt.target.elements.contactName.value} is already in contacts.`);
      evt.target.reset();
      return;
    }
    await this.setState((prevState) => ({
      contacts: prevState.contacts.concat({
        name: evt.target.elements.contactName.value,
        number: evt.target.elements.contactNumber.value,
        id: nanoid(),
      }),
    }));
    evt.target.reset();
  };

  deleteContact = (evt) => {
    const idContactToDelete = evt.target.getAttribute("data-id");
    this.setState((prevContacts) => ({
      contacts: prevContacts.contacts.filter(
        (contact) => contact.id !== idContactToDelete
      ),
    }));
  };

  findContact = (evt) => {
    this.setState({
      filter: evt.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className="mainBox">
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter findContact={this.findContact} />
        <ContactsList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
