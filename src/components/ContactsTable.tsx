import React from 'react';
import { Table } from 'semantic-ui-react';
import { Contact } from '../types/contact';

function ContactsTable({ contacts }: ContactsProps) {
  const renderContacts = (contacts: readonly Contact[] | null): JSX.Element => {
    const items = contacts!.map((contact: Contact) => {
      return (
        <Table.Row key={contact.id}>
          <Table.Cell>{contact.fullName}</Table.Cell>
          <Table.Cell>{contact.email}</Table.Cell>
          <Table.Cell>{contact.whatsapp}</Table.Cell>
        </Table.Row>
      );
    });

    return (
      <Table celled verticalAlign="middle" unstackable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Whatsapp</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{items}</Table.Body>
      </Table>
    );
  };

  return <>{renderContacts(contacts)}</>;
}

export default ContactsTable;

interface ContactsProps {
  contacts: readonly Contact[] | null;
}
