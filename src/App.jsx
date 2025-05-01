import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contactData, setContactData] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    return savedContacts !== null
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contactData));
  }, [contactData]);

  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const filteredContacts = contactData.filter(
    (contact) =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      contact.number.includes(inputValue)
  );

  const initialValues = {
    id: "",
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    setContactData([...contactData, newContact]);
    actions.resetForm();
  };

  const deleteContact = (id) => {
    setContactData(contactData.filter((contact) => contact.id !== id));
  };

  return (
    <div className="appDiv">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} initialValues={initialValues} />
      <SearchBox value={inputValue} onChange={handleChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
