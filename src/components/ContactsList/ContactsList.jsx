import styled from "styled-components";

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  margin-left: 20px;
  font-size: 14px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const ContactsList = ({ contacts, filter, deleteContact }) => (
  <ul>
    {filter.length !== 0
      ? contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((contact) => (
            <ContactItem key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <DeleteButton
                type="button"
                data-id={contact.id}
                onClick={(evt) => deleteContact(evt)}
              >
                Delete
              </DeleteButton>
            </ContactItem>
          ))
      : contacts.map((contact) => (
          <ContactItem key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <DeleteButton
              type="button"
              data-id={contact.id}
              onClick={(evt) => deleteContact(evt)}
            >
              Delete
            </DeleteButton>
          </ContactItem>
        ))}
  </ul>
);
export default ContactsList;
