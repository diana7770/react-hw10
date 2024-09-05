import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 200px;

`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #398bc2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #164b6e;
  }
`;

const ContactForm = ({ addContact }) => (
  <Form onSubmit={(evt) => addContact(evt)} className="contactForm">
    <Label>Name</Label>
    <Input
      type="text"
      name="contactName"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      className="contactName"
    />
    <Label className="contactNumberLabel">Number</Label>
    <Input
      type="tel"
      name="contactNumber"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      className="contactNumber"
    />
    <Button type="submit" className="addContactBtn">
      Add contact
    </Button>
  </Form>
);

export default ContactForm;
